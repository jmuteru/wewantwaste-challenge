"use client";

import { useState } from "react";
import { ProgressTracker } from "@/components/ProgressTracker";
import Header from "@/components/Header";
import { SkipGrid } from "@/components/skip/SkipGrid";
import { SkipSizeGuide } from "@/components/skip/SkipSizeGuide";
import NavigationButtons from "@/components/NavigationButtons";
import { useSkipData } from "@/hooks/UseSkipData";
import { SelectedSkipSummary } from "@/components/SelectedSkipSummary";
import { ChevronUp } from "lucide-react";

export default function SkipSelectionPage() {
  const [selectedSkip, setSelectedSkip] = useState<string | null>("8yard");
  const [currentStep] = useState(2);
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const { skips, loading } = useSkipData();

  const selectedSkipData = skips.find((skip) => skip.id === selectedSkip);

  const handleForward = () => {
    alert(`Selected skip: ${selectedSkip}`);
  };

  const handleBack = () => {
    alert("Going back to previous step");
  };

  const toggleMobileSummary = () => {
    setShowMobileSummary(!showMobileSummary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Progress Tracker */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <ProgressTracker currentStep={currentStep} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Header />
        </div>

        {/* Main Content Area */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Skip Selection */}
          <div className="lg:col-span-8 mb-8 lg:mb-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <SkipGrid
                skips={skips}
                selectedSkip={selectedSkip}
                onSelectSkip={(id) => {
                  setSelectedSkip(id);
                  setShowMobileSummary(true);
                }}
                loading={loading}
              />
            </div>
          </div>

          {/* Right Column - Summary & Guide */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            {selectedSkipData && (
              <SelectedSkipSummary skip={selectedSkipData} />
            )}
            <SkipSizeGuide />
          </div>
        </div>

        {/* Mobile Summary Drawer */}
        <div className="lg:hidden">
          {selectedSkipData && (
            <div
              className={`fixed inset-x-0 bottom-0 z-40 transform transition-transform duration-300 ease-in-out ${
                showMobileSummary ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="relative">
                {/* Drawer Handle */}
                <button
                  onClick={toggleMobileSummary}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-200"
                >
                  <ChevronUp
                    className={`h-6 w-6 text-slate-600 transition-transform duration-300 ${
                      showMobileSummary ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Drawer Content */}
                <div className="bg-white rounded-t-3xl shadow-lg">
                  <div className="max-h-[70vh] overflow-y-auto custom-scrollbar px-4 pt-8 pb-24">
                    <div className="max-w-lg mx-auto space-y-6">
                      <SelectedSkipSummary skip={selectedSkipData} />
                      <SkipSizeGuide />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
