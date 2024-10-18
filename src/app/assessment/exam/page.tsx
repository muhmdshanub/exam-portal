"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import QuestionOverview from './components/QuestionOverview';
import QuestionDisplay from './components/QuestionDisplay';
import ControlPanel from './components/ControlPanel';
import TimerDisplay from './components/TimerDisplay';
import { getQuestions } from '../../../utils/getQuestions';
import { getAnswers } from '@/utils/getAnswers';

type Question = {
  id: number;
  question: string; 
  options: string[];
  selectedAnswer: string; // New field for the selected answer
  isFlagged: boolean; // New field to track if the question is flagged
};

type Answer = {
  questionId: number;
  answer: string; 
};

export default function ExamPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set()); // New state for tracking answered questions
  const [timeRemaining, setTimeRemaining] = useState(3600); // Timer set to 60 minutes in seconds
  

  const router = useRouter();

  // Timer countdown logic
  useEffect(() => {
    if (timeRemaining <= 0) {
      // Handle timer expiration (e.g., auto-submit or notify user)
      alert('Time is up!');
      calculateAndRedirect();
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount or timer end
  }, [timeRemaining]);

  // Format the timer as MM:SS
  // const formatTime = (timeInSeconds: number) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // };


  // Load questions from JSON file
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        // Initialize questions with selectedAnswer and isFlagged
        const initializedQuestions = data.map((q: Omit<Question, 'selectedAnswer' | 'isFlagged'>) => ({
          ...q,
          selectedAnswer: '', // Default empty string for selected answer
          isFlagged: false, // Default to false
        }));
        setQuestions(initializedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

 

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleFlag = (id: number) => {
    const updatedQuestions = questions.map((question) => 
      question.id === id
        ? { ...question, isFlagged: !question.isFlagged } // Toggle flag state
        : question
    );
    setQuestions(updatedQuestions);
    alert(`Question ${id} flagged!`);
  };
  
  const handleAnswerSelect = (id: number, answer: string) => {
    const updatedQuestions = questions.map((question) => 
      question.id === id
        ? { ...question, selectedAnswer: answer } // Update selected answer
        : question
    );
    setQuestions(updatedQuestions);

    // Add the question ID to the set of answered questions if it's not already there
    setAnsweredQuestions((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(id); // Add the current question ID to the set
      return newSet;
    });
  };

  // Determine if the user can submit the exam (at least 50% answered)
  const canSubmit = answeredQuestions.size >= questions.length / 2;


  // Helper function to calculate score and redirect
  const calculateAndRedirect = async () => {
    try {
      // Fetch correct answers
      const fetchedAnswers = await getAnswers();
      

      // Calculate score
      let correctAnswersCount = 0;
      const correctAnswersMap = fetchedAnswers.reduce((acc, { questionId, answer }) => {
        acc[questionId] = answer; 
        return acc;
      }, {} as Record<number, string>);

      questions.forEach((question) => {
        if (question.selectedAnswer === correctAnswersMap[question.id]) {
          correctAnswersCount++; 
        }
      });

      const score = (correctAnswersCount / questions.length) * 100; 

      // Redirect to the /result page, passing the score as a query parameter
      // Redirect to the /result page, passing the score as a query parameter
    router.push(`/assessment/result?score=${score.toFixed(2)}&correct=${correctAnswersCount}&total=${questions.length}`);
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  };


  const handleSubmit = () => {
    if (confirm('Are you sure you want to exit the exam?')) {
      calculateAndRedirect(); // Call the calculate and redirect function
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (!questions.length) {
    return <div>No questions available</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-200 p-2.5 md:py-2.5 md:px-[10%] " >
  {/* Left Rectangle - Question Overview */}
  <div className="flex-none p-4 bg-white shadow-md w-full md:w-1/4"> {/* Full width on mobile, 1/4 width on larger screens */}
    <QuestionOverview
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
      timeRemaining={timeRemaining}
    />
  </div>

  {/* Right Rectangle - Question Display and Control Panel */}
  <div className="relative flex flex-col p-4 bg-white shadow-md mt-4 md:ml-3 md:mt-0 w-full"> {/* No horizontal margin on mobile */}
    
    {/* Timer Display - Positioned at top-right */}
    <div className="absolute top-0 right-0 p-4 hidden md:block">
      <TimerDisplay timeRemaining={timeRemaining} />
    </div>

    {/* Question Display should take up available space */}
    <div className="flex-1">
      <QuestionDisplay
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>

    {/* Control Panel at the bottom */}
    <div className="mt-4 mx-0"> {/* Optional margin-top for spacing */}
      <ControlPanel
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleFlag={handleFlag}
        handleSubmit={handleSubmit}
        canSubmit={canSubmit}
      />
    </div>
  </div>
</div>


  );
}
