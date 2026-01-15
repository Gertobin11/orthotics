import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types.ts';
import { error } from '@sveltejs/kit';
import type * as types from '$lib/types.ts';

export const load: PageServerLoad = async (event) => {
	const client = createClient({
		projectId: env.PROJECT_ID,
		dataset: 'production',
		apiVersion: '2024-01-01',
		token: env.TOKEN,
		useCdn: false
	});

	const slug = event.params.slug;
	const category = event.params.category;

	const query = `*[_type == "orthotic" && slug.current == $slug && category == $category][0]{
    name,
    category,
    price,
    slug,
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

	const orthotic: types.OrthoticProduct | undefined = await client.fetch(query, {
		slug,
		category
	});

	if (!orthotic) {
		throw error(404, 'Orthotic not found');
	}

	return {
		orthotic,
		category
	};
};
