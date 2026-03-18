import { createClient } from '@sanity/client';
import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async () => {
	const client = createClient({
		projectId: env.PROJECT_ID,
		dataset: 'production',
		apiVersion: '2024-01-01',
		token: env.TOKEN,
		useCdn: false
	});

	const query = `
  {
    "summaries": [
      {
        "name": "Custom",
        "title": "Custom / Bespoke",
        "lowestPrice": *[_type == "orthotic" && category == "Custom"] | order(price asc)[0].price,
        "summary":
				"Bespoke medical devices made from 3D scans. Full gait analysis & biomechanical assessment included."
       
      },
      {
        "name": "Prefab",
        "title": "Prefabricated / Off-the-shelf",
        "lowestPrice": *[_type == "orthotic" && category == "Prefab"] | order(price asc)[0].price,
         "summary": "High-quality, off-the-shelf support. Corrects over-pronation/supination. Fitting included."
      }
    ]
  }.summaries
`;
	const summaries = await client.fetch(query);

	return {
		summaries
	};
};
