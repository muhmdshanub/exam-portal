
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Flag } from 'lucide-react'; // Import Lucide Flag icon

export interface RoundButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  badgeContent?: number | string; // Optional badge content
  isSelected?: boolean; // Indicates if the question is selected
  isAnswered?: boolean; // Indicates if the question is answered
  isFlagged?: boolean; // Indicates if the question is flagged
  size?: "default" | "sm" | "lg"; // Define sizes
}

const RoundButton = React.forwardRef<HTMLButtonElement, RoundButtonProps>(
  ({
    className,
    size = "default",
    asChild = false,
    badgeContent,
    isSelected = false,
    isAnswered = false,
    isFlagged = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Base button classes
    const baseClasses = "inline-flex items-center justify-center relative rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

    // Conditional styles
    const outlineClass = isSelected ? "border border-orange-500" : "";
    const bgClass = isAnswered ? "bg-green-500 text-white" : (isFlagged ? "bg-orange-500 text-white" : "bg-white");
    
    return (
      <div className="relative">
        <Comp
          className={cn(baseClasses, outlineClass, bgClass, {
            "h-10 w-10": size === "default",
            "h-8 w-8 text-xs": size === "sm",
            "h-12 w-12": size === "lg",
          }, className)}
          ref={ref}
          {...props}
        />
        {badgeContent && (
          <span className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-red-500 text-white text-xs font-bold px-1">
            {badgeContent}
          </span>
        )}
        {isFlagged && (
          <div className="absolute top-0 left-1/2 transform -translate-x-[-25%] -translate-y-[40%] flex items-center justify-center bg-white rounded-full w-3 h-3 border border-gray-300">
            <Flag className="w-2 h-2 text-orange-500  fill-current" />
          </div>
        )}
      </div>
    );
  }
);
RoundButton.displayName = "RoundButton";

export { RoundButton };
