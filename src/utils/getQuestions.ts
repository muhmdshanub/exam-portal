import questions from '../data/questions.json';

type Question = {
  id: number;
  question: string; // Change from 'text' to 'question'
  options: string[];
};

export const getQuestions = async (): Promise<Question[]> => {
  try {
    // Simulate a network request with a 1-second delay
    const response: Question[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(questions);
      }, 1000);
    });

    return response; // Return the questions as a JavaScript array of objects
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw new Error('Failed to fetch questions'); // Rethrow the error for further handling
  }
};
