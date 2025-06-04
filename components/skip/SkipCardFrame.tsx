import { Skeleton } from "@/components/ui/skeleton";

const SkipCardFrame = () => {
  return (
    <div className="border rounded-lg p-4">
      <Skeleton className="h-40 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
};
export default SkipCardFrame;
