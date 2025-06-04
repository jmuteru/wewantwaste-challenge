import { Skeleton } from "@/components/ui/skeleton";

const SkipCardFrame = () => {
  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800">
      <Skeleton className="h-56 w-full mb-6 rounded-xl" />
      <Skeleton className="h-8 w-3/4 mb-3" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-6" />
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  );
};

export default SkipCardFrame;
