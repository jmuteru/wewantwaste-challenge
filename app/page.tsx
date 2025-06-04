"use client";

import { useState, useEffect } from "react";
import { ProgressTracker } from "@/components/ProgressTracker";
import Header from "@/components/Header";
import { SkipGrid } from "@/components/skip/SkipGrid";
import { SkipSizeGuide } from "@/components/skip/SkipSizeGuide";
import NavigationButtons from "@/components/NavigationButtons";
import { useSkipData } from "@/hooks/UseSkipData";
export default function SkipSelectionPage() {
  const [selectedSkip, setSelectedSkip] = useState<string | null>("8yard");
  const [currentStep, setCurrentStep] = useState(3);
  const { skips, loading } = useSkipData();

  const handleForward = () => {
    alert(`Selected skip: ${selectedSkip}`);
  };

  const handleBack = () => {
    alert("Going back to previous step");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProgressTracker currentStep={currentStep} />

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 mb-8">
          <Header />
          <SkipGrid
            skips={skips}
            selectedSkip={selectedSkip}
            onSelectSkip={setSelectedSkip}
            loading={loading}
          />
        </div>

        <SkipSizeGuide />

        <NavigationButtons
          goBack={handleBack}
          goForward={handleForward}
          canGoForward={!!selectedSkip}
        />
      </div>
    </div>
  );
}
