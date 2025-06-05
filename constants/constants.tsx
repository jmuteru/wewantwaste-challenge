import {
  MapPin,
  Trash2,
  Truck,
  CheckCircle,
  Calendar,
  CreditCard,
} from "lucide-react";

export const steps = [
  { name: "Postcode", icon: <MapPin className="h-5 w-5" /> },
  { name: "Waste Type", icon: <Trash2 className="h-5 w-5" /> },
  { name: "Select Skip", icon: <Truck className="h-5 w-5" /> },
  { name: "Permit Check", icon: <CheckCircle className="h-5 w-5" /> },
  { name: "Choose Date", icon: <Calendar className="h-5 w-5" /> },
  { name: "Payment", icon: <CreditCard className="h-5 w-5" /> },
];

export const sizeGuides = [
  {
    title: "Small Skips (4-6 Yards)",
    description: "Ideal for small garden projects and minor home renovations",
  },
  {
    title: "Medium Skips (8-10 Yards)",
    description: "Perfect for larger home renovations and clearances",
  },
  {
    title: "Large Skips (12-14 Yards)",
    description: "Suitable for commercial projects and major construction work",
  },
];

export const images = {
  img1: "/images/dumpster1.jpg",
  img2: "/images/dumpster2.jpg",
  img3: "/images/dumpster3.jpg",
  img4: "/images/dumpster4.jpg",
  img5: "/images/dumpster5.jpg",
  img6: "/images/dumpster6.jpg",
};
export const API =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
