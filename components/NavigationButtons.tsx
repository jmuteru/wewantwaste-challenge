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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-50/95 via-slate-50/80 to-slate-50/0 backdrop-blur-xl border-t border-slate-200 md:relative md:bg-transparent md:border-0 md:p-0 z-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-7xl mx-auto">
        {/* Back button */}
        <Button
          onClick={goBack}
          variant="outline"
          size="lg"
          className="flex items-center gap-3 px-6 py-6 sm:py-4 border border-slate-200 hover:bg-slate-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold">Previous Step</span>
        </Button>

        {/* Forward button */}
        <Button
          onClick={goForward}
          size="lg"
          className={`flex items-center gap-3 px-6 py-6 sm:py-4 font-semibold transition-all duration-300 w-full sm:w-auto backdrop-blur-sm ${
            canGoForward
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
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
