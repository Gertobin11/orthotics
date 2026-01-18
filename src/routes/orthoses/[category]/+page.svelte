<script lang="ts">
	import { fade } from 'svelte/transition';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { Phone } from '@lucide/svelte';

	import type { PageProps } from './$types.ts';
	import MetaTags from '$lib/components/MetaTags.svelte';

	let { data }: PageProps = $props();

	let category = $derived(data.category);
	const getCategory = () => category;

	let products = $derived(data.products);

	let seoTitle = $state('Prefabricated Orthotics Range (€90) | Tralee Orthotics');

	if (getCategory() === 'Prefab') {
		seoTitle = 'Custom Prescription Orthotics Range (€400) | Tralee Orthotics';
	}

	let seoDesc = $state(
		'Browse our full range of medical-grade prefabricated insoles. Available in low, medium, and high densities for immediate pain relief. Assessment and fitting included.'
	);
	if (getCategory() === 'Prefab') {
		seoDesc =
			'Explore our specialized custom orthotics for sports injuries and complex biomechanics. Precision-manufactured from 3D scans. €400 all-inclusive fee.';
	}
</script>

<MetaTags title={seoTitle} description={seoDesc} />

<div
	class="bg-white font-sans text-slate-600"
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 200 }}
>
	<section class="relative border-b border-gray-100 bg-slate-100">
		<div class="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
			<nav class="mx-auto max-w-7xl py-4 text-sm text-slate-500">
				<a href="/" class="hover:text-cyan-600">Home</a>
				<span class="mx-2">/</span>
				<a href="/orthoses" class="hover:text-cyan-600">Orthoses</a>
				<span class="mx-2">/</span>
				<span class="font-medium text-slate-900 capitalize">
					{#if getCategory() === 'Prefab'}
						Prefabricated Range
					{:else}
						Custom Prescription
					{/if}
				</span>
			</nav>

			<div class="max-w-3xl">
				<span class="my-2 block text-sm font-bold tracking-wider text-cyan-600 uppercase">
					{#if getCategory() === 'Prefab'}
						Off-The-Shelf Solutions
					{:else}
						Tralee Orthotics Bespoke
					{/if}
				</span>

				<h1 class="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
					{#if getCategory() === 'Prefab'}
						Medical Grade <br class="hidden md:block" />
						<span class="text-cyan-600">Prefabricated Orthotics.</span>
					{:else}
						Precision 3D Scanned <br class="hidden md:block" />
						<span class="text-cyan-600">Custom Biomechanics.</span>
					{/if}
				</h1>

				<p class="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
					{#if getCategory() === 'Prefab'}
						High-quality, off-the-shelf support available in multiple densities. Price includes
						professional fitting and immediate dispensing. Excellent for general correction and
						comfort at an accessible price point (€90).
					{:else}
						Individually fabricated from 3D scans of your feet using the most modern technology.
						Includes full biomechanical assessment, gait analysis, and fitting. The gold standard
						for treating complex foot pain and injury recovery (€400).
					{/if}
				</p>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="tel:0867700191"
						class="flex items-center justify-center gap-4 rounded-xl bg-cyan-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:text-white hover:shadow-2xl"
					>
						<Phone class="h-5 w-5" />
						Book Appointment: 086 770 0191
					</a>
				</div>
			</div>

			<div class="absolute top-1/2 right-0.5 hidden w-1/3 -translate-y-1/2 justify-center lg:flex">
				{#if getCategory() === 'Prefab'}
					<img
						src="/prefab.png"
						alt="Range of Bio Advanced Prefabricated Orthotics"
						class="max-h-125 w-auto object-contain drop-shadow-xl"
					/>
				{:else}
					<img
						src="/scanned-foot.png"
						alt="3D Foot Scanning Technology"
						class="max-h-125 w-auto object-contain drop-shadow-xl"
					/>
				{/if}
			</div>
		</div>
	</section>

	<main class="mx-auto mt-5 max-w-7xl pb-20 md:px-6">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#key products}
				{#each products as product}
					<ProductCard {product} {category} />
				{/each}
			{/key}
		</div>
	</main>
</div>
