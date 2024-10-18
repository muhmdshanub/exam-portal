import { FC } from "react";
import clsx from "clsx"; // optional: to conditionally join classNames

// Define the prop types for the component
interface EltLogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

// Create the reusable EltLogo component
const EltLogo: FC<EltLogoProps> = ({ 
  width = 50, 
  height = 50, 
  color = "#d2dbed", 
  className 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={clsx(className)} // allows combining external classes
      fill="none"
    >
      <rect width="50" height="381.035" transform="matrix(1 0 0 0.588 199.971 75.375)" fill={color} />
      <rect width="50" height="261.967" transform="matrix(1.018 0 0 0.634 118.027 133.375)" fill={color} />
      <rect width="50" height="241.875" transform="matrix(1 0 0 0.462 30.934 188.266)" fill={color} />
      <rect width="50" height="331.016" transform="matrix(1 0 0 0.109 30.934 144.45)" fill={color} />
      <rect width="50" height="331.016" transform="matrix(1 0 0 0.109 118.027 86.3)" fill={color} />
      <rect width="50" height="331.016" transform="matrix(1 0 0 0.109 199.971 31.613)" fill={color} />
    </svg>
  );
};

export default EltLogo;
