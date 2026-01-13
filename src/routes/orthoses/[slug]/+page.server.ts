import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const client = createClient({
		projectId: env.PROJECT_ID,
		dataset: 'production',
		apiVersion: '2024-01-01',
		token: env.TOKEN,
		useCdn: false
	});

    const query = `*[_type == "orthotic" && slug.current == $slug][0]{
    name,
    category,
    price,
    summary,
    "imageUrl": mainImage.asset->url,
    details {
      shell_material,
      process,
      control_level,
      description,
      best_for,
      default_specs {
        top_cover,
        mid_layer,
        heel_post,
        base_plate
      }
    }
  }`;

  const orthotic = await client.fetch(query, { slug: event.params.slug });

  if (!orthotic) {
    throw error(404, "Orthotic not found");
  }

  return {
    orthotic
  };
};
