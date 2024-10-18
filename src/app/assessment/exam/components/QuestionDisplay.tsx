// interface QuestionDisplayProps {
//   question: {
//     id: number;
//     question: string;
//     options: string[];
//     selectedAnswer: string; // Field for the selected answer
//     isFlagged : boolean,
//   };
//   onAnswerSelect: (id: number, answer: string) => void; // Prop to handle answer selection
// }

// export default function QuestionDisplay({ question, onAnswerSelect }: QuestionDisplayProps) {
//   const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onAnswerSelect(question.id, event.target.value); // Call the function with the question ID and selected answer
//   };

//   return (
//     <div className="flex-1 p-6">
//       <div className="mb-8">
//         <h3 className="text-md ">MCQ-<span style={{color:'red'}}>{`Q${question.id}`}</span></h3>
//         <p className="text-xl font-semibold mt-2">{question.question}</p>

//         {/* Displaying options dynamically */}
//         <div className="mt-4">
//           {question.options.map((option, index) => (
//             <div className="mb-2" key={index}>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name={`question_${question.id}`}
//                   value={option}
//                   checked={question.selectedAnswer === option} // Check if this option is selected
//                   onChange={handleOptionChange} // Handle option change
//                   className="mr-2"
//                 />
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import "../styles/styles.css"

interface QuestionDisplayProps {
  question: {
    id: number;
    question: string;
    options: string[];
    selectedAnswer: string; // Field for the selected answer
    isFlagged: boolean;
  };
  onAnswerSelect: (id: number, answer: string) => void; // Prop to handle answer selection
}

export default function QuestionDisplay({ question, onAnswerSelect }: QuestionDisplayProps) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAnswerSelect(question.id, event.target.value); // Call the function with the question ID and selected answer
  };

  // Function to get the letter for each option (A, B, C, D, etc.)
  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index); // 65 is the char code for 'A'
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h3 className="text-md">
          MCQ-<span style={{ color: 'red' }}>{`Q${question.id}`}</span>
        </h3>
        <p className="text-xl font-semibold mt-2">{question.question}</p>

        {/* Displaying options dynamically */}
        <div className="mt-4">
          {question.options.map((option, index) => (
            <div className="mb-2" key={index}>
              <label className="flex items-center">
                {/* Custom Radio Button */}
                <div className="custom-radio mr-2">
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option}
                    checked={question.selectedAnswer === option} // Check if this option is selected
                    onChange={handleOptionChange} // Handle option change
                    className="hidden" // Hide default radio button
                  />
                  <span className="custom-radio-circle">
                    {getOptionLetter(index)} {/* Display A, B, C, D inside the circle */}
                  </span>
                </div>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
