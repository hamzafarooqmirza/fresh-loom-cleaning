import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { stirling } from "@/lib/areas/stirling";

export const metadata: Metadata = {
  title: stirling.metaTitle,
  description: stirling.metaDescription,
  alternates: {
    canonical: "/areas/stirling",
  },
};

export default function StirlingAreaPage() {
  return <LocationPage content={stirling} />;
}
