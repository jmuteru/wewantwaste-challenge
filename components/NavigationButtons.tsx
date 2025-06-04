"use client";
import type { NavigationButtonsProps } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NavigationButtons = ({
  goBack,
  goForward,
  canGoForward,
}: NavigationButtonsProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/20 md:relative md:bg-transparent md:dark:bg-transparent md:border-0 md:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-7xl mx-auto">
        {/* back button */}
        <Button
          onClick={goBack}
          variant="outline"
          size="lg"
          className="flex items-center gap-3 px-6 py-4 border dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 dark:bg-slate-800/30 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold">Previous Step</span>
        </Button>

        {/* forward button */}
        <Button
          onClick={goForward}
          size="lg"
          className={`flex items-center gap-3 px-6 py-4 font-semibold transition-all duration-300 w-full sm:w-auto backdrop-blur-sm ${
            canGoForward
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg button-glow"
              : "bg-slate-300/10 dark:bg-slate-700/30 text-slate-500 dark:text-slate-400 cursor-not-allowed border dark:border-slate-700/50"
          }`}
          disabled={!canGoForward}
        >
          <span>Continue to Next Step</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtons;
