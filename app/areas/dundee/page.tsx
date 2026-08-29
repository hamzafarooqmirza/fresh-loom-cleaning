import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dundee } from "@/lib/areas/dundee";

export const metadata: Metadata = {
  title: dundee.metaTitle,
  description: dundee.metaDescription,
  alternates: {
    canonical: "/areas/dundee",
  },
};

export default function DundeeAreaPage() {
  return <LocationPage content={dundee} />;
}
