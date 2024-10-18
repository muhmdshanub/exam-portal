// "use client";

// import { Pie, PieChart, Cell, PieLabelRenderProps } from "recharts";
// import { Button } from "@/components/ui/button"; // Assuming you have a Button component
// import { PhoneCall, Copy } from "lucide-react";


// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A pie chart with segment labels";

// // Updated chart data with orange variants
// const chartData = [
//   { course: "ACCA", percentage: 25, fill: "#FFA500" }, // Orange
//   { course: "CA", percentage: 22.5, fill: "#FF8C00" }, // Darker Orange
//   { course: "CMA IND", percentage: 21.5, fill: "#FF7F50" }, // Coral (lighter orange)
//   { course: "CMA USA", percentage: 15, fill: "#FF6347" }, // Tomato (reddish-orange)
//   { course: "CS", percentage: 16, fill: "#FF4500" }, // OrangeRed
// ];

// // Custom label function to display the course name and percentage
// const renderCustomLabel = (props: PieLabelRenderProps) => {
//   const { x, y, name, value } = props; // Added `value` to get percentage
//   if (!x || !y || !name || value === undefined) return null; // Guard clause to handle missing values

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="var(--foreground)"
//       textAnchor={x > 200 ? "start" : "end"}
//       dominantBaseline="central"
//       fontSize="12px"
//     >
//       {`${name} ${value}%`} {/* Display "course name percentage" */}
//     </text>
//   );
// };

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   acca: {
//     label: "ACCA",
//     color: "#FFA500", // Orange
//   },
//   ca: {
//     label: "CA",
//     color: "#FF8C00", // Darker Orange
//   },
//   cmaInd: {
//     label: "CMA IND",
//     color: "#FF7F50", // Coral
//   },
//   cmaUsa: {
//     label: "CMA USA",
//     color: "#FF6347", // Tomato
//   },
//   cs: {
//     label: "CS",
//     color: "#FF4500", // OrangeRed
//   },
// } satisfies ChartConfig;

// export function CourseSuitabilityCard() {
//   return (
//     <Card className="flex flex-col p-4">
//       <CardContent className="flex flex-col sm:flex-row gap-4">
//         {/* Text Section */}
//         <div className="sm:w-[60%] flex flex-col">
//           <p className="text-muted-foreground">
//             You are most suitable for
//           </p>

//           {/* Updated CardTitle with larger text and colored "(ACCA)" */}
//           <CardTitle className="text-2xl font-bold my-2"> {/* Increased font size to 2xl */}
//             Association of Chartered Certified Accountant 
//             <span className="text-red-500">{`   (ACCA)`}</span> {/* Red color for "(ACCA)" */}
//           </CardTitle>

//           <p className="text-muted-foreground">
//             Association of Chartered Certified Accountants are professionals who are responsible for 
//             the financial management of companies, financial reporting, auditing, taxation, and other financial aspects 
//             of the business. They have a global recognition and are highly sought after in the finance industry for their expertise. 
//             Join this elite group and make a global impact.
//           </p>
//         </div>

//         {/* Pie Chart Section */}
//         <div className="sm:w-[40%] flex justify-end items-center">
//           <ChartContainer
//             config={chartConfig}
//             className="aspect-square w-full max-w-[200px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
//           >
//             <PieChart width={250} height={250}>
//               <ChartTooltip content={<ChartTooltipContent hideLabel />} />
//               <Pie
//                 data={chartData}
//                 dataKey="percentage"
//                 nameKey="course"
//                 label={renderCustomLabel}
//                 labelLine={true} // Displays the line from the chart to the label
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.fill} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ChartContainer>
//         </div>
//       </CardContent>

//       {/* Footer with buttons */}
//       <CardFooter className="flex flex-col sm:flex-row gap-4 mt-4">
//       <Button variant="default" className="rounded-full">View Course Details</Button>

//         <Button variant="secondary" className="flex items-center justify-between rounded-full">
//             <span style={{marginRight:'.5rem'}}>Consult Assistant</span>
//             <PhoneCall className="ml-2 w-4 h-4" /> {/* Set width and height for smaller icon */}
//         </Button>

//         <Button variant="outline" className="flex items-center justify-between rounded-full">
//             <span style={{marginRight:'.5rem'}}>Copy URL</span>
//             <Copy className="ml-2 w-4 h-4" /> {/* Set width and height for smaller icon */}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }


"use client";

import { Pie, PieChart, Cell, PieLabelRenderProps } from "recharts";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { PhoneCall, Copy } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with segment labels";

// Updated chart data with orange variants
const chartData = [
  { course: "ACCA", percentage: 25, fill: "#FFA500" }, // Orange
  { course: "CA", percentage: 22.5, fill: "#FF8C00" }, // Darker Orange
  { course: "CMA IND", percentage: 21.5, fill: "#FF7F50" }, // Coral (lighter orange)
  { course: "CMA USA", percentage: 15, fill: "#FF6347" }, // Tomato (reddish-orange)
  { course: "CS", percentage: 16, fill: "#FF4500" }, // OrangeRed
];

// Custom label function to display the course name and percentage
const renderCustomLabel = (props: PieLabelRenderProps) => {
  const { x, y, name, value } = props; // Added `value` to get percentage
  if (!x || !y || !name || value === undefined) return null; // Guard clause to handle missing values

  return (
    <text
      x={x}
      y={y}
      fill="var(--foreground)"
      textAnchor={x > 200 ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12px"
    >
      {`${name} ${value}%`} {/* Display "course name percentage" */}
    </text>
  );
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  acca: {
    label: "ACCA",
    color: "#FFA500", // Orange
  },
  ca: {
    label: "CA",
    color: "#FF8C00", // Darker Orange
  },
  cmaInd: {
    label: "CMA IND",
    color: "#FF7F50", // Coral
  },
  cmaUsa: {
    label: "CMA USA",
    color: "#FF6347", // Tomato
  },
  cs: {
    label: "CS",
    color: "#FF4500", // OrangeRed
  },
} satisfies ChartConfig;

export function CourseSuitabilityCard() {
  return (
    <div className="flex items-center justify-center h-full">
  <Card className="flex flex-col p-2 w-full max-w-[500px] max-h-[500px] overflow-hidden">
    <CardContent className="flex flex-col sm:flex-row gap-2  h-full"> {/* Adjusted height settings */}
      {/* Text Section */}
      <div className="sm:w-[60%] flex flex-col">
        <p className="text-muted-foreground text-xs">
          You are most suitable for
        </p>

        {/* Updated CardTitle with smaller text and colored "(ACCA)" */}
        <CardTitle className="text-lg font-bold my-1">
          Association of Chartered Certified Accountant 
          <span className="text-red-500">{` (ACCA)`}</span>
        </CardTitle>

        <p className="text-muted-foreground text-xs">
          ACCA professionals manage financial operations of companies, focusing on reporting, auditing, taxation, and more. 
          They are globally recognized and in high demand in the finance industry. Join this elite group to make an impact.
        </p>
      </div>

      {/* Pie Chart Section */}
      <div className="sm:w-[40%] flex justify-center md:justify-end items-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full max-w-[100px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart width={150} height={150}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="course"
              label={renderCustomLabel}
              labelLine={true} // Displays the line from the chart to the label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </CardContent>

    {/* Footer with buttons */}
    <CardFooter className="flex  gap-2 mt-2">
      <Button variant="default" className="rounded-full text-xs">View Course Details</Button>

      <Button variant="secondary" className="flex items-center justify-between rounded-full text-xs ">
        <span style={{ marginRight: '.5rem' }}>Consult</span>
        <PhoneCall className="ml-1 w-4 h-4" /> {/* Smaller icon */}
      </Button>

      <Button variant="outline" className="hidden  md:flex items-center justify-between rounded-full text-xs">
        <span style={{ marginRight: '.5rem' }}>Copy URL</span>
        <Copy className="ml-1 w-4 h-4" /> {/* Smaller icon */}
      </Button>
    </CardFooter>
  </Card>
</div>

  );
}

