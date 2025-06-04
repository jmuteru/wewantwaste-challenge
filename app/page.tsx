"use client";

import { useState } from "react";
import { ProgressTracker } from "@/components/ProgressTracker";
import Header from "@/components/Header";
import { SkipGrid } from "@/components/skip/SkipGrid";
import { SkipSizeGuide } from "@/components/skip/SkipSizeGuide";
import NavigationButtons from "@/components/NavigationButtons";
import { useSkipData } from "@/hooks/UseSkipData";
import { SelectedSkipSummary } from "@/components/SelectedSkipSummary";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SkipSelectionPage() {
  const [selectedSkip, setSelectedSkip] = useState<string | null>("8yard");
  const [currentStep, setCurrentStep] = useState(2);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { skips, loading } = useSkipData();

  const selectedSkipData = skips.find((skip) => skip.id === selectedSkip);

  const handleForward = () => {
    alert(`Selected skip: ${selectedSkip}`);
  };

  const handleBack = () => {
    alert("Going back to previous step");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen gradient-dark-1 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/20 border-b border-slate-200/50 dark:border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <ProgressTracker currentStep={currentStep} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Mobile Menu Toggle */}
          <div className="col-span-12 flex lg:hidden justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMobileMenu}
              className="relative z-50 dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 backdrop-blur-hover"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Main Content - Skip Selection */}
          <div className="col-span-12 lg:col-span-8">
            <Header />
            <div className="mb-8">
              <SkipGrid
                skips={skips}
                selectedSkip={selectedSkip}
                onSelectSkip={setSelectedSkip}
                loading={loading}
              />
            </div>
          </div>

          {/* Right Sidebar - Summary & Guide */}
          <div
            className={`fixed inset-0 lg:relative lg:col-span-4 z-40 transform transition-transform duration-300 ease-in-out lg:transform-none ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="h-full lg:h-auto overflow-y-auto custom-scrollbar dark:bg-slate-900/95 backdrop-blur-xl lg:bg-transparent p-6 lg:p-0 pt-20 lg:pt-0">
              <div className="space-y-6">
                {/* Selected Skip Summary */}
                {selectedSkipData && (
                  <SelectedSkipSummary skip={selectedSkipData} />
                )}

                {/* Size Guide */}
                <SkipSizeGuide />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 mb-24 sm:mb-8">
          <NavigationButtons
            goBack={handleBack}
            goForward={handleForward}
            canGoForward={!!selectedSkip}
          />
        </div>
      </div>
    </div>
  );
}
