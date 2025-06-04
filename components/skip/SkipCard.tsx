"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SkipCardProps } from "@/types/types";
import { CheckCircle, Clock, Truck, Star } from "lucide-react";

export function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
        isSelected
          ? "ring-2 ring-blue-500 shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/30 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
          : "hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/30 bg-white dark:bg-slate-800"
      }`}
      onClick={onSelect}
    >
      <div className="relative overflow-hidden">
        <Image
          src={skip.imageUrl || "/placeholder.svg"}
          alt={skip.name}
          width={400}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Size badge */}
        <Badge className="absolute top-4 right-4 bg-white/90 text-slate-800 font-semibold shadow-lg">
          {skip.size}
        </Badge>

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-4 left-4 bg-blue-600 rounded-full p-2 shadow-lg">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        )}

        {/* Popular badge */}
        {skip.id === "8yard" && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Most Popular
            </Badge>
          </div>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-800/95 rounded-lg px-3 py-2 shadow-lg">
          <div className="text-2xl font-bold text-slate-800 dark:text-white">
            £{skip.price}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            total price
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
            {skip.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {skip.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              {skip.hirePeriod}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Truck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              Free delivery & collection
            </span>
          </div>
        </div>

        <div
          className={`mt-6 p-4 rounded-xl border-2 transition-all duration-300 ${
            isSelected
              ? "border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-700"
              : "border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-800"
          }`}
        >
          <div className="text-center">
            <div
              className={`text-sm font-medium mb-1 ${isSelected ? "text-blue-700 dark:text-blue-300" : "text-slate-600 dark:text-slate-400"}`}
            >
              {isSelected ? "✓ Selected" : "Click to select"}
            </div>
            {!isSelected && (
              <div className="text-xs text-slate-500 dark:text-slate-500">
                Perfect for your project size
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
