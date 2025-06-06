"use client";

import type { SkipGridProps } from "@/types/types";
import { SkipCard } from "@/components/skip/SkipCard";
import SkipCardFrame from "@/components/skip/SkipCardFrame";

export function SkipGrid({
  skips,
  selectedSkip,
  onSelectSkip,
  loading,
}: SkipGridProps) {
  if (loading) {
    return (
      <div className="">
        {[...Array(6)].map((_, i) => (
          <SkipCardFrame key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip === skip.id}
          onSelect={() => onSelectSkip(skip.id)}
        />
      ))}
    </div>
  );
}
