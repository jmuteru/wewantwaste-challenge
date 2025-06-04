import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, Factory, Info } from "lucide-react";

const sizeGuides = [
  {
    title: "Small Projects",
    subtitle: "4-6 Yard Skips",
    description:
      "Perfect for garden clearances, small DIY projects, and household decluttering",
    icon: <Home className="h-5 w-5" />,
    examples: ["Garden waste", "Small renovation", "Furniture disposal"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
  {
    title: "Medium Projects",
    subtitle: "8-10 Yard Skips",
    description:
      "Ideal for kitchen/bathroom renovations, garage clearouts, and medium construction",
    icon: <Building className="h-5 w-5" />,
    examples: ["Kitchen renovation", "Bathroom refit", "Garage clearance"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Large Projects",
    subtitle: "12-14 Yard Skips",
    description:
      "Best for major renovations, commercial projects, and large-scale construction work",
    icon: <Factory className="h-5 w-5" />,
    examples: ["House renovation", "Commercial work", "Construction sites"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
];

export function SkipSizeGuide() {
  return (
    <Card className="bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          <CardTitle className="text-lg text-slate-800 dark:text-white">
            Size Guide
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {sizeGuides.map((guide, index) => (
          <div
            key={index}
            className={`${guide.bgColor} ${guide.borderColor} rounded-xl p-4 border transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${guide.color} text-white shadow-sm`}
              >
                {guide.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {guide.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {guide.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              {guide.description}
            </p>

            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Common uses:
              </p>
              {guide.examples.map((example, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
