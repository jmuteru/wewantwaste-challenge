import { Progress } from "@/components/ui/progress";
import type { ProgressBarProps } from "@/types/types";
import { steps } from "@/constants/constants";

export function ProgressTracker({ currentStep }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
                    : index === currentStep
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30 ring-4 ring-blue-100 dark:ring-blue-900/30"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                }`}
              >
                {index < currentStep ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.icon
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${index <= currentStep ? "text-slate-700 dark:text-slate-300" : "text-slate-400"}`}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 ${index < currentStep ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-700"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Progress */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {steps[currentStep].name}
          </span>
        </div>
        <Progress
          value={(currentStep / (steps.length - 1)) * 100}
          className="h-2"
        />
      </div>
    </div>
  );
}
