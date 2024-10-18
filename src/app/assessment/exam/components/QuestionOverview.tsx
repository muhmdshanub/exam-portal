import { useState } from "react";
import { RoundButton } from "@/components/ui/RoundButton"; // Adjust the import path accordingly
import { ChevronDown, ChevronUp } from "lucide-react"; // Adjust the import path accordingly
import TimerDisplay from "./TimerDisplay";

interface QuestionOverviewProps {
  questions: { id: number; question: string; selectedAnswer: string; isFlagged?: boolean }[];
  currentQuestionIndex: number;
  timeRemaining:number;
  setCurrentQuestionIndex: (index: number) => void;
}

export default function QuestionOverview({ questions, currentQuestionIndex, setCurrentQuestionIndex, timeRemaining }: QuestionOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full bg-white-100">
      <div className="flex items-center mb-2 justify-start">
        <h2 className="text-lg mr-2 ">Overview</h2> {/* Added margin-right for spacing */}
        
        <div className="md:hidden ">
          <TimerDisplay timeRemaining={timeRemaining} /> {/* Timer display alongside the heading */}
        </div> 
      </div>
      

      {/* Toggle Button for Mobile */}
      <button 
        className="absolute top-2 right-2 text-black-500 md:hidden" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronUp /> : <ChevronDown />} {/* Toggle icon */}
      </button>

      {/* Grid for Non-Mobile Screens */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-2">
        {questions.map((q, index) => (
          <RoundButton
            key={q.id}
            isSelected={index === currentQuestionIndex}
            isAnswered={q.selectedAnswer.trim().length > 0}
            isFlagged={q.isFlagged}
            size="sm"
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {q.id}
          </RoundButton>
        ))}
      </div>

      {/* For Mobile Screens: Expanded State */}
      {isExpanded && (
        <div className="grid grid-cols-5 gap-2 md:hidden">
          {questions.map((q, index) => (
            <RoundButton
              key={q.id}
              isSelected={index === currentQuestionIndex}
              isAnswered={q.selectedAnswer.trim().length > 0}
              isFlagged={q.isFlagged}
              size="sm"
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {q.id}
            </RoundButton>
          ))}
        </div>
      )}

      {/* For Mobile Screens: Collapsed State */}
      {!isExpanded && (
        <div className="flex overflow-x-auto space-x-2 md:hidden">
          {questions.map((q, index) => (
            <RoundButton
              key={q.id}
              isSelected={index === currentQuestionIndex}
              isAnswered={q.selectedAnswer.trim().length > 0}
              isFlagged={q.isFlagged}
              size="sm"
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {q.id}
            </RoundButton>
          ))}
        </div>
      )}
    </div>
  );
}
