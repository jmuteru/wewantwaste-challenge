"use client";

import { SkipGridProps } from "@/types/types";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkipCardFrame key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
