import React from "react";
import { NavigationButtonsProps } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
const NavigationButtons = ({
  goBack,
  goForward,
  canGoForward,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      <Button
        onClick={goBack}
        variant="outline"
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        onClick={goForward}
        variant="outline"
        className="flex items-center gap-2"
        disabled={!canGoForward}
      >
        Continue <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};
export default NavigationButtons;
