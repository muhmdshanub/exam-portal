// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; 
// import { Button } from "@/components/ui/button"; 

// interface AssessmentLayoutProps {
//   children: ReactNode;
// }

// export default function AssessmentLayout({ children }: AssessmentLayoutProps) {
//   const router = useRouter();
//   const [activeNav, setActiveNav] = useState<string>("exam");

//   useEffect(() => {
//     // Redirect from /assessment to /assessment/exam if on the base path
//     if (window.location.pathname === "/assessment") {
//       router.replace("/assessment/exam");
//     }
//   }, [router]);

//   const handleNavClick = (nav: string) => {
//     setActiveNav(nav);
//     router.push(`/assessment/${nav}`);
//   };

//   return (
//     <div className="flex flex-col h-full w-full">
//       <header className="bg-white shadow-md p-4">
//         <h1 className="text-left text-xl font-bold">Assessment Portal</h1>
//         <nav className="flex justify-start space-x-4 mt-4">
//           <Button
//             variant="link"
//             onClick={() => handleNavClick("exam")}
//             className={`flex items-center ${activeNav === "exam" ? "text-orange-500 underline" : "text-gray-400"}`}
//           >
//             Exam
//           </Button>
//           <Button
//             variant="link"
//             className="flex items-center text-gray-400 cursor-default"
//             disabled // Make this button disabled
//           >
//             Lorem
//           </Button>
//           <Button
//             variant="link"
//             className="flex items-center text-gray-400 cursor-default"
//             disabled // Make this button disabled
//           >
//             Lorem
//           </Button>
//         </nav>
//       </header>
//       <main className="flex-1">
//         {children}
//       </main>
//     </div>
//   );
// }


"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button"; 

interface AssessmentLayoutProps {
  children: ReactNode;
}

export default function AssessmentLayout({ children }: AssessmentLayoutProps) {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState<string>("exam");

  useEffect(() => {
    // Redirect from /assessment to /assessment/exam if on the base path
    if (window.location.pathname === "/assessment") {
      router.replace("/assessment/exam");
    }
  }, [router]);

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    router.push(`/assessment/${nav}`);
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-left text-xl font-bold">Assessment Portal</h1>
        <nav className="flex justify-start space-x-4 mt-4">
          <Button
            variant="link"
            onClick={() => handleNavClick("exam")}
            className={`flex items-center ${activeNav === "exam" ? "text-orange-500 underline" : "text-gray-400"}`}
          >
            Exam
          </Button>
          <Button
            variant="link"
            className="flex items-center text-gray-400 cursor-default"
            disabled // Make this button disabled
          >
            Lorem
          </Button>
          <Button
            variant="link"
            className="flex items-center text-gray-400 cursor-default"
            disabled // Make this button disabled
          >
            Lorem
          </Button>
        </nav>
      </header>
      <main className="flex-1 max-h-[calc(100vh-4rem)] max-w-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}

