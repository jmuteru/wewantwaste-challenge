import { Progress } from "@/components/ui/progress";
import { ProgressBarProps } from "@/types/types";
import { steps } from "@/constants/constants";

export function ProgressTracker({ currentStep }: ProgressBarProps) {
  return (
    <>
      {/* Desktop Progress Tracker */}
      <div className="mb-8 hidden md:block">
        <div className="flex justify-between items-center mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index < currentStep
                  ? "text-green-600 dark:text-green-400"
                  : index === currentStep
                    ? "text-primary font-medium"
                    : "text-slate-400"
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full mb-2 bg-white dark:bg-slate-800 shadow-sm">
                {step.icon}
              </div>
              <span className="text-xs sm:text-sm">{step.name}</span>
            </div>
          ))}
        </div>
        <Progress
          value={(currentStep / (steps.length - 1)) * 100}
          className="h-2"
        />
      </div>

      {/* Mobile Progress Indicator */}
      <div className="md:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium">{steps[currentStep].name}</span>
        </div>
        <Progress
          value={(currentStep / (steps.length - 1)) * 100}
          className="h-2"
        />
      </div>
    </>
  );
}
