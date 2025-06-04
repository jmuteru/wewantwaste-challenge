"use client";

import { useState, useEffect } from "react";
import { Skip } from "@/types/types";

export function useSkipData() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(process.env.NEXT_PUBLIC_API);

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
            imageUrl: "/dumpster1.jpg",
          },
          {
            id: "6yard",
            name: "6 Yard Skip",
            size: "6 Yards",
            price: 300,
            hirePeriod: "14 day hire period",
            description: "Perfect for medium renovation projects",
            imageUrl: "/dumpster2.jpg",
          },
          {
            id: "8yard",
            name: "8 Yard Skip",
            size: "8 Yards",
            price: 325,
            hirePeriod: "7 day hire period",
            description: "Great for larger home renovations",
            imageUrl: "/dumpster3.jpg",
          },
          {
            id: "10yard",
            name: "10 Yard Skip",
            size: "10 Yards",
            price: 375,
            hirePeriod: "7 day hire period",
            description: "Suitable for major renovation work",
            imageUrl: "/dumpster4.jpg",
          },
          {
            id: "12yard",
            name: "12 Yard Skip",
            size: "12 Yards",
            price: 425,
            hirePeriod: "7 day hire period",
            description: "For commercial projects and large clearances",
            imageUrl: "/dumpster5.jpg",
          },
          {
            id: "14yard",
            name: "14 Yard Skip",
            size: "14 Yards",
            price: 475,
            hirePeriod: "7 day hire period",
            description: "Our largest skip for major construction work",
            imageUrl: "/dumpster6.jpg",
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
