import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ar.rukunalaroobausedfurniture.ae',
      lastModified: "2026-03-13",
      changeFrequency: 'monthly',
      priority: 1,
      images : ["/ركن-العروبة-للأثاث-المستعمل-في-الشارقة.jpg"],
    },
  ]
}