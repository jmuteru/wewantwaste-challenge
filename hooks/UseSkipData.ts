"use client";

import { useState, useEffect } from "react";
import { Skip } from "@/types/types";
import { API, images } from "@/constants/constants";

export function useSkipData() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { img1, img2, img3, img4, img5, img6 } = images;

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          (process.env.NEXT_PUBLIC_API as string) || API,
        ); // TODO: .env is preferred in prod
        console.log(process.env.NEXT_PUBLIC_API);

        if (!response.ok) {
          throw new Error("Failed to fetch skip data");
        }

        const data = await response.json();

        // Transform the data to match our Skip interface
        const transformedData: Skip[] = [
          {
            id: "4yard",
            name: "4 Yard Skip",
            size: "4 Yards",
            price: 227,
            hirePeriod: "7 day hire period",
            description: "Ideal for small home projects and garden waste",
            imageUrl: img1,
          },
          {
            id: "6yard",
            name: "6 Yard Skip",
            size: "6 Yards",
            price: 300,
            hirePeriod: "14 day hire period",
            description: "Perfect for medium renovation projects",
            imageUrl: img2,
          },
          {
            id: "8yard",
            name: "8 Yard Skip",
            size: "8 Yards",
            price: 325,
            hirePeriod: "7 day hire period",
            description: "Great for larger home renovations",
            imageUrl: img3,
          },
          {
            id: "10yard",
            name: "10 Yard Skip",
            size: "10 Yards",
            price: 375,
            hirePeriod: "7 day hire period",
            description: "Suitable for major renovation work",
            imageUrl: img4,
          },
          {
            id: "12yard",
            name: "12 Yard Skip",
            size: "12 Yards",
            price: 425,
            hirePeriod: "7 day hire period",
            description: "For commercial projects and large clearances",
            imageUrl: img5,
          },
          {
            id: "14yard",
            name: "14 Yard Skip",
            size: "14 Yards",
            price: 475,
            hirePeriod: "7 day hire period",
            description: "Our largest skip for major construction work",
            imageUrl: img6,
          },
        ];

        setSkips(transformedData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading, error };
}
