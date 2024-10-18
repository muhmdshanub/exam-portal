// import React from "react";
// import { CourseSuitabilityCard as ResultCard } from "./components/Resultcard";

// const ResultPage: React.FC = () => {
//   return (
//     <div className="flex flex-col h-full w-full justify-center items-center bg-gray-100">
//       <h2 className="text-2xl font-bold my-4 ">Your Result Based on Your Answers</h2>
//       <div className="bg-black" style={{ maxWidth: '700px' }}>
//         <ResultCard />
//       </div>
//     </div>
//   );
// };

// export default ResultPage;


import React from "react";
import { CourseSuitabilityCard as ResultCard } from "./components/Resultcard";

const ResultPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 overflow-hidden">
      <div className="flex flex-col justify-center  items-center content-center"> {/* Center everything in this wrapper */}
        <h2 className="text-2xl font-bold my-4 hidden md:block ">Your Result Based on Your Answers</h2>
        <div className=" w-full max-w-[500px] flex items-center justify-center">
          <ResultCard /> {/* Ensure ResultCard fits within the parent */}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;



