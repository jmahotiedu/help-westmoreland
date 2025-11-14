import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://helpwestmoreland.org";

  const routes = [
    "",
    "/about",
    "/mission",
    "/programs",
    "/transparency",
    "/faq",
    "/help",
    "/partner",
    "/contact",
    "/donate",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/donate" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.8,
  }));
}
