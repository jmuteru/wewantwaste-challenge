"use client";
import NavigationButtons from "@/components/NavigationButtons";

export default function Home() {
  function handleBack() {}
  function handleForward() {}
  const goForward = true;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavigationButtons
        goBack={handleBack}
        goForward={handleForward}
        canGoForward={goForward}
      />
    </div>
  );
}
