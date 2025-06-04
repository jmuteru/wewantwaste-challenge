import { Sparkles, Filter } from "lucide-react";

const Header = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Choose Your Skip
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Find the perfect size for your project
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Select from our range of skip sizes below. Each skip comes with
          flexible hire periods and competitive pricing. Need help choosing?
          Check out our size guide on the right.
        </p>
      </div>
    </div>
  );
};

export default Header;
