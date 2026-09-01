import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { perth } from "@/lib/areas/perth";

export const metadata: Metadata = {
  title: "Carpet Cleaning Perth - Deep Clean Your Floors",
  description:
    "Revive your carpets with our top-notch cleaning services in Perth. Schedule your appointment now!",
  alternates: {
    canonical: "/areas/perth",
  },
};

export default function PerthAreaPage() {
  return <LocationPage content={perth} />;
}
