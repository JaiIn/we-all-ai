export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://we-all-ai.vercel.app/sitemap.xml',
    host: 'https://we-all-ai.vercel.app',
  }
}
