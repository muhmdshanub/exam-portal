import answers from '../data/answers.json';


type Answer = {
  questionId: number;
  answer: string; 
};

export const getAnswers = async (): Promise<Answer[]> => {
  try {
    // Simulate a network request with a 1-second delay
    const response: Answer[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(answers);
      }, 1000);
    });
    
    return response; // Return the answers as a JavaScript array of objects
  } catch (error) {
    console.error('Error fetching answers:', error);
    throw new Error('Failed to fetch answers'); // Rethrow the error for further handling
  }
};
