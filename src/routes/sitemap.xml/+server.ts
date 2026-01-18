import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';

const client = createClient({
	projectId: env.PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-01-01',
	token: env.TOKEN,
	useCdn: false
});

export async function GET() {
	const products = await client.fetch(`
    *[_type == "orthotic"] {
      "slug": slug.current,
      category
    }
  `);

	const staticPages = [
		'',
		'/orthotics',
		'/orthotics/Prefab',
		'/orthotics/custom',
		'/faq',
		'/contact'
	];

	const site = 'https://traleeorthotics.ie';

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  >
    ${staticPages
			.map(
				(page) => `
      <url>
        <loc>${site}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
			)
			.join('')}

    ${products
			.map(
				(product: { category: string; slug: string }) => `
      <url>
        <loc>${site}/orthotics/${product.category}/${product.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
			)
			.join('')}
  </urlset>`;

	// 4. Return the response
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
