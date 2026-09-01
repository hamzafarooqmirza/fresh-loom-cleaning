import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { edinburgh } from "@/lib/areas/edinburgh";

export const metadata: Metadata = {
  title: "Carpet Cleaning Edinburgh: Fresh & Clean Every Time",
  description:
    "Looking for top carpet cleaning in Edinburgh? Get exceptional results and restore your carpets' beauty!",
  alternates: {
    canonical: "/areas/edinburgh",
  },
};

export default function EdinburghAreaPage() {
  return <LocationPage content={edinburgh} />;
}
