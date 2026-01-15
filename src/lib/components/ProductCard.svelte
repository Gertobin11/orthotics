<script lang="ts">
	import type * as types from '$lib/types.ts';

	let data = $props();

	let { product, category }: { product: types.OrthoticProduct; category: string } = data;
</script>

<a
	href={`/orthoses/${category}/${product.slug.current}`}
	class="group flex transform flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
	<div
		class="relative flex aspect-4/3 items-center justify-center bg-gray-50 ] transition-colors group-hover:bg-gray-100"
	>
		{#if product.imageUrl}
			<img
				src={product.imageUrl}
				alt={product.name}
				class="h-full w-full object-contain mix-blend-multiply overflow-hidden transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<div class="text-gray-300 p-6">
				<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path></svg
				>
			</div>
		{/if}
	</div>

	<div class="flex grow flex-col p-5">
		<div class="mb-2 flex items-start justify-between">
			<h3
				class="text-lg leading-tight font-bold text-slate-800 transition-colors group-hover:text-teal-600"
			>
				{product.name}
			</h3>
			<span class="font-bold text-slate-900">€{product.price}</span>
		</div>

		<p class="mb-4 line-clamp-2 text-sm text-gray-500">
			{product.summary}
		</p>

		<div class="mt-auto border-t border-gray-50 pt-4">
			<span
				class="inline-flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700"
			>
				View Details
				<svg
					class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</span>
		</div>
	</div>
</a>
