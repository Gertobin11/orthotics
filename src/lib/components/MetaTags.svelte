<script lang="ts">
	import { page } from "$app/state";


	export let title: string = 'Tralee Orthotics | Advanced Foot Care & Precision Biomechanics.';
	export let description: string =
		'Expert biomechanical assessment and foot care in Tralee, Co. Kerry. We provide medical-grade prefabricated insoles (€90) and bespoke 3D-scanned custom orthotics (€400). Assessment and fitting included.';
	export let image: string = 'orthoses-banner.png';
	export let keywords: string[] = [];

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description: description,
		publisher: {
			'@type': 'Organization',
			name: 'Tralee Orthotics',
			logo: {
				'@type': 'ImageObject',
				url: image
			}
		},
		image: image
	};

	const structuredJSONData = JSON.stringify(structuredData);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Tralee Orthotics" />
	<meta property="og:image:alt" content={description} />

	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html `<script type="application/ld+json">${structuredJSONData}</script>`}
</svelte:head>
