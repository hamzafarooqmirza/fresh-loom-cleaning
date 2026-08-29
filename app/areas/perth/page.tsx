import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { perth } from "@/lib/areas/perth";

export const metadata: Metadata = {
  title: perth.metaTitle,
  description: perth.metaDescription,
  alternates: {
    canonical: "/areas/perth",
  },
};

export default function PerthAreaPage() {
  return <LocationPage content={perth} />;
}
