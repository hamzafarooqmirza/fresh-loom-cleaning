import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dundee } from "@/lib/areas/dundee";

export const metadata: Metadata = {
  title: "Expert Carpet Cleaning in Dundee That Delivers Results",
  description:
    "Experience deep cleaning for your carpets in Dundee. Book your appointment for a cleaner home now!",
  alternates: {
    canonical: "/areas/dundee",
  },
};

export default function DundeeAreaPage() {
  return <LocationPage content={dundee} />;
}
