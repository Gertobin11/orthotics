import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types.ts';
import type * as types from '$lib/types.ts';

export const load: PageServerLoad = async (event) => {
    const client = createClient({
        projectId: env.PROJECT_ID,
        dataset: 'production',
        apiVersion: '2024-01-01',
        token: env.TOKEN,
        useCdn: false
    });
    const category = event.params.category;

    const query = `*[_type == "orthotic" && category == $category]{
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

    const products: types.OrthoticProduct[] = await client.fetch(query, {
        category
    });



    return {
        products, category
    };
};
