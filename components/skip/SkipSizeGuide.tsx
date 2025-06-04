import { Truck } from "lucide-react";
import { sizeGuides } from "@/constants/constants";
export function SkipSizeGuide() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Skip Size Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sizeGuides.map((guide, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
              <Truck className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
            </div>
            <div>
              <h3 className="font-medium">{guide.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {guide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
