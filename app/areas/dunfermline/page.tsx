import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dunfermline } from "@/lib/areas/dunfermline";

export const metadata: Metadata = {
  title: dunfermline.metaTitle,
  description: dunfermline.metaDescription,
  alternates: {
    canonical: "/areas/dunfermline",
  },
};

export default function DunfermlineAreaPage() {
  return <LocationPage content={dunfermline} />;
}
