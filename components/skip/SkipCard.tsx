"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkipCardProps } from "@/types/types";

export function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md cursor-pointer ${
        isSelected
          ? "ring-2 ring-primary"
          : "border-slate-200 dark:border-slate-800"
      }`}
      onClick={onSelect}
    >
      <div className="relative">
        <Image
          src={skip.imageUrl}
          alt={skip.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary">
          {skip.size}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold mb-1">{skip.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          {skip.hirePeriod}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {skip.description}
        </p>
        <p className="text-2xl font-bold text-primary">£{skip.price}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant={isSelected ? "default" : "outline"}
          className="w-full"
          onClick={onSelect}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </Button>
      </CardFooter>
    </Card>
  );
}
