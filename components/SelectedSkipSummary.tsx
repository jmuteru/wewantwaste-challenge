import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SelectedSkipSummaryProps, Skip } from "@/types/types";
import { CheckCircle, Clock, Truck, Calculator } from "lucide-react";
import Image from "next/image";

export function SelectedSkipSummary({ skip }: SelectedSkipSummaryProps) {
  return (
    <Card className="lg:sticky lg:top-24 gradient-dark-card backdrop-blur-xl glow glow-border hover-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          </div>
          <CardTitle className="text-lg text-slate-100">
            Selected Skip
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={skip.imageUrl || "/placeholder.svg"}
            alt={skip.name}
            width={300}
            height={150}
            className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <Badge className="absolute top-2 right-2 bg-blue-500/90 text-white backdrop-blur-sm">
            {skip.size}
          </Badge>
        </div>

        <div>
          <h3 className="font-bold text-xl text-slate-100 mb-2">
            {skip.name}
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            {skip.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Clock className="h-4 w-4 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-slate-300">
              {skip.hirePeriod}
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Truck className="h-4 w-4 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-slate-300">
              Free delivery & collection
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-emerald-950/30 rounded-lg backdrop-blur-sm border border-emerald-800/50">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg">
              <Calculator className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-emerald-300">
                Total Price
              </span>
              <div className="text-2xl font-bold text-emerald-400">
                £{skip.price}
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg button-glow">
          Confirm Selection
        </Button>
      </CardContent>
    </Card>
  );
}
