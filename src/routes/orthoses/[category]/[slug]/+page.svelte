<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageProps } from './$types.ts';
	import MetaTags from '$lib/components/MetaTags.svelte';

	let { data }: PageProps = $props();

	const orthoticData = () => data.orthotic;

	const orthotic = orthoticData();

	const formatSizing = (text: string) => {
		return text.split('\n').filter((line) => line.trim() !== '');
	};
</script>

<MetaTags
	title="{orthotic.name} | Tralee Orthotics"
	description="{orthotic.summary.substring(0, 160)}..."
	image={orthotic.imageUrl}
/>

<div class="min-h-screen bg-gray-100 pt-16 font-sans text-slate-800 selection:bg-blue-100">
	<nav class="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500">
		<a href="/" class="hover:text-cyan-600">Home</a>
		<span class="mx-2">/</span>
		<a href="/orthoses" class="hover:text-cyan-600">Orthoses</a>
		<span class="mx-2">/</span>
		<a href="/orthoses/{data.category}" class="hover:text-cyan-600">{data.category}</a>
		<span class="mx-2">/</span>
		<span class="font-medium text-slate-900">{orthotic.name}</span>
	</nav>

	<main class="mx-auto max-w-7xl pb-20 md:px-6">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
			<div
				in:fly={{ x: -400, duration: 400 }}
				out:fly={{ x: -400, duration: 250 }}
				class="sticky top-6 overflow-hidden border border-gray-100 bg-gray-50 md:rounded-2xl"
			>
				{#if orthotic.imageUrl}
					<img
						src={orthotic.imageUrl}
						alt={orthotic.name}
						class="h-full max-h-150 w-full object-cover object-center"
					/>
				{:else}
					<div class="flex h-125 w-full items-center justify-center bg-white text-slate-400">
						<span>No Image Available</span>
					</div>
				{/if}
			</div>

			<div
				class="flex flex-col space-y-6 bg-white p-6 shadow-xl md:rounded-2xl"
				in:fly={{ x: 400, duration: 400 }}
				out:fly={{ x: 400, duration: 250 }}
			>
				<div class="border-b border-gray-200 pb-6">
					<div class="flex items-start justify-between">
						<div>
							<span
								class="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase"
							>
								{orthotic.category === 'Prefab' ? 'Off-The-Shelf' : 'Custom Prescription'}
							</span>
							<h1
								class="text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-4xl"
							>
								{orthotic.name}
							</h1>
						</div>
						<div class="text-right">
							<p class="text-3xl font-bold text-slate-900">€{orthotic.price}</p>
							<p class="text-sm text-slate-500">All Included</p>
						</div>
					</div>

					<p class="mt-4 text-lg font-medium text-slate-600">
						{orthotic.summary}
					</p>
				</div>

				<div class="rounded-xl border border-gray-100 bg-gray-50 p-5">
					<h3 class="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase">
						Technical Specifications
					</h3>
					<div class="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
						<div>
							<span class="block text-xs text-slate-500">Shell Material</span>
							<span class="font-semibold text-slate-900">{orthotic.details.shell_material}</span>
						</div>

						<div>
							<span class="block text-xs text-slate-500">Process</span>
							<span class="font-semibold text-slate-900">{orthotic.details.process}</span>
						</div>

						<div>
							<span class="block text-xs text-slate-500">Control Level</span>
							<span class="font-semibold text-slate-900">{orthotic.details.control_level}</span>
						</div>

						{#if orthotic.details.best_for}
							<div>
								<span class="block text-xs text-slate-500">Best For</span>
								<span class="font-semibold text-cyan-600">{orthotic.details.best_for}</span>
							</div>
						{/if}
					</div>
				</div>

				<div class="prose prose-sm max-w-none leading-relaxed text-slate-600">
					{#if orthotic.category === 'Prefab'}
						{#each orthotic.details.description.split('\n') as paragraph}
							{#if paragraph.includes('SIZING GUIDE:')}{:else if paragraph.trim().length > 0}
								<p>{paragraph}</p>
							{/if}
						{/each}
					{:else}
						<p>{orthotic.details.description}</p>
					{/if}
				</div>

				{#if orthotic.category === 'Custom' && orthotic.details.default_specs}
					<div class="border-t border-gray-200 pt-5">
						<h3 class="mb-3 text-sm font-bold text-slate-900">Default Configuration</h3>
						<div class="grid grid-cols-2 gap-4 text-xs md:grid-cols-4">
							{#if orthotic.details.default_specs.top_cover}
								<div class="rounded border bg-white p-2">
									<span class="mb-1 block text-slate-400">Top Cover</span>
									{orthotic.details.default_specs.top_cover}
								</div>
							{/if}
							{#if orthotic.details.default_specs.heel_post && orthotic.details.default_specs.heel_post !== 'N/A'}
								<div class="rounded border bg-white p-2">
									<span class="mb-1 block text-slate-400">Heel Post</span>
									{orthotic.details.default_specs.heel_post}
								</div>
							{/if}
							{#if orthotic.details.default_specs.mid_layer && orthotic.details.default_specs.mid_layer !== 'N/A'}
								<div class="rounded border bg-white p-2">
									<span class="mb-1 block text-slate-400">Mid Layer</span>
									{orthotic.details.default_specs.mid_layer}
								</div>
							{/if}
						</div>
					</div>
				{/if}

				<div class="mt-auto pt-4">
					<a
						href="tel:0867700191"
						class="group relative flex w-full justify-center rounded-xl border border-transparent bg-cyan-600 px-4 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-slate-800 hover:text-white hover:shadow-2xl"
					>
						Book Appointment
						<span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
					</a>
					<p class="mt-3 text-center text-xs text-slate-400">
						'Bookings confirmed typically within 24 hours'
					</p>
				</div>
			</div>
		</div>
	</main>
</div>
