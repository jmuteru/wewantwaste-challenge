"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SelectedSkipSummaryProps } from "@/types/types";
import { CheckCircle, Clock, Truck, Calculator, X } from "lucide-react";
import Image from "next/image";
import { Toaster, toast } from "sonner";

export function SelectedSkipSummary({ skip, onDeselect }: SelectedSkipSummaryProps) {
  const confirmSelection = () => {
    toast.success(`${skip.name} has been selected`, {
      duration: 5000,
      className: "sm:min-w-[400px]",
      position: window.innerWidth < 640 ? "bottom-center" : "top-left",
      style: {
        background:
          "linear-gradient(to right, rgb(34, 197, 94), rgb(22, 163, 74))",
        color: "white",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      },
    });
  };

  const handleDeselect = () => {
    onDeselect();
    toast.info("Skip deselected", {
      duration: 3000,
      position: window.innerWidth < 640 ? "bottom-center" : "top-left",
    });
  };

  return (
    <Card className="lg:sticky lg:top-24 bg-gradient-to-br from-slate-50 to-white backdrop-blur-xl shadow-lg border border-slate-200/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-lg text-black">Selected Skip</CardTitle>
          </div>
          <button
            onClick={handleDeselect}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Deselect skip"
          >
            <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
          </button>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white backdrop-blur-sm">
            {skip.size}
          </Badge>
        </div>

        <div>
          <h3 className="font-bold text-xl text-black mb-2">{skip.name}</h3>
          <p className="text-sm text-slate-700 mb-3">{skip.description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <Clock className="h-4 w-4 text-white font-bold" />
            </div>
            <span className="text-sm text-white font-semibold">
              {skip.hirePeriod}
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <Truck className="h-4 w-4 text-white font-bold" />
            </div>
            <span className="text-sm text-white font-semibold">
              Free delivery & collection
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <Calculator className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-white font-semibold">
                Total Price
              </span>
              <div className="text-2xl font-bold text-white">£{skip.price}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-12">
          <Button
            onClick={handleDeselect}
            variant="outline"
            className="w-full sm:w-auto order-2 sm:order-1 bg-red-500 hover:bg-red-700 text-white hover:text-white"
          >
            Change Selection
          </Button>
          <Button
            onClick={confirmSelection}
            className="w-full sm:w-auto order-1 sm:order-2 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white shadow-lg"
          >
            Confirm Selection
          </Button>
        </div>

        <Toaster
          expand={true}
          richColors
          closeButton
          className="sm:!top-4 sm:!right-4"
          toastOptions={{
            className: "sm:!w-[400px]",
            classNames: {
              toast: "group",
              title: "group-hover:text-white/90",
              description: "group-hover:text-white/90",
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
