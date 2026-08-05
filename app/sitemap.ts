import type { MetadataRoute } from "next";
import { allServices } from "@/lib/data";

const baseUrl = "https://freshloomcleaning.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us", "/services", "/contact-us"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
