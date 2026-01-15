import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types.ts';

export const load: PageServerLoad = async () => {
	const client = createClient({
		projectId: env.PROJECT_ID,
		dataset: 'production',
		apiVersion: '2024-01-01',
		token: env.TOKEN,
		useCdn: false
	});

	const query = `*[_type == "faq"] | order(order asc) {
  question,
  answer
}`;

	const faqs: {question: string, answer:string}[] = await client.fetch(query);

	return {
		faqs
	};
};
