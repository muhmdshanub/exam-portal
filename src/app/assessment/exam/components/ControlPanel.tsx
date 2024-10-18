import { Button } from "@/components/ui/button"; // shadcn Button
import { ChevronLeft, ChevronRight, Flag } from "lucide-react"; // Lucide Icons

// types.ts
export type Question = {
  id: number;
  question: string; 
  options: string[];
  selectedAnswer: string; // New field for the selected answer
  isFlagged: boolean; // New field to track if the question is flagged
};

interface ControlPanelProps {
  questions: Question[];
  currentQuestionIndex: number;
  totalQuestions: number;
  canSubmit: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
  handleFlag: (id: number) => void; // Accept id as an argument
  handleSubmit: () => void;
}

export default function ControlPanel({
  questions,
  currentQuestionIndex,
  totalQuestions,
  canSubmit,
  handleNext,
  handlePrevious,
  handleFlag,
  handleSubmit,
}: ControlPanelProps) {
  return (
    <div className="flex justify-between items-center mt-8 mx-0">

      {/* First Subdiv: End and Submit Button */}
      <div className="flex-none">
        <Button
          className="bg-black hover:bg-black text-white flex items-center"
          size={window.innerWidth < 768 ? "xs" : "default"}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          End and Submit
        </Button>
      </div>

      {/* Second Subdiv: Progress Indicator */}
      <div className="flex-1 text-center hidden md:block">
        <p>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</p>
      </div>

      {/* Third Subdiv: Previous, Flag, Next buttons */}
      <div className="flex flex-none items-center gap-4">

        {/* Previous Button */}
        <Button
          className={`flex items-center ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'} text-black ${currentQuestionIndex === 0 ? '' : 'text-sm md:text-base'}`}
          size={window.innerWidth < 768 ? "xs" : "default"} // Use xs size on mobile
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft className="mr-2 md:hidden" /> {/* Show only on mobile */}
          <span className="hidden md:block">Previous</span> {/* Show only on non-mobile */}
        </Button>

        {/* Flag Button */}
        <Button
          className="bg-gray-200 hover:bg-gray-300 text-black flex items-center"
          size={window.innerWidth < 768 ? "xs" : "default"}
          onClick={() => handleFlag(questions[currentQuestionIndex].id)}
        >
          <Flag className="mr-2" />
          Flag
        </Button>

        {/* Next Button */}
        <Button
          className={`flex items-center ${currentQuestionIndex === totalQuestions - 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'} text-black ${currentQuestionIndex === totalQuestions - 1 ? '' : 'text-sm md:text-base'}`}
          size={window.innerWidth < 768 ? "xs" : "default"} // Use xs size on mobile
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          <span className="hidden md:block">Next</span> {/* Show only on non-mobile */}
          <ChevronRight className="ml-2 md:hidden" /> {/* Show only on mobile */}
        </Button>

      </div>
    </div>
  );
}
