import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { edinburgh } from "@/lib/areas/edinburgh";

export const metadata: Metadata = {
  title: edinburgh.metaTitle,
  description: edinburgh.metaDescription,
  alternates: {
    canonical: "/areas/edinburgh",
  },
};

export default function EdinburghAreaPage() {
  return <LocationPage content={edinburgh} />;
}
