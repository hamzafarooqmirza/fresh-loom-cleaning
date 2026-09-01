import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dunfermline } from "@/lib/areas/dunfermline";

export const metadata: Metadata = {
  title: "Revive Your Carpets: Dunfermline Cleaning Solutions",
  description:
    "Need carpet cleaning in Dunfermline? We deliver exceptional results and customer satisfaction. Call us now!",
  alternates: {
    canonical: "/areas/dunfermline",
  },
};

export default function DunfermlineAreaPage() {
  return <LocationPage content={dunfermline} />;
}
