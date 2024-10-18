"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Home() {
  const router = useRouter(); // Create a router instance

  const handleExamClick = () => {
    router.push("/assessment/exam"); // Redirect to the exam page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to ELT Global!</h1>
      <p className="mt-4 text-gray-700 text-center">
        Please attend the exam by clicking the button below. Your success starts here!
      </p>
      
      {/* Button to redirect to the assessment exam */}
      <Button className="mt-6" onClick={handleExamClick}>
        Attend Exam
      </Button>
    </div>
  );
}
