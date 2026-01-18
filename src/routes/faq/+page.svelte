<script lang="ts">
	import { BadgeQuestionMarkIcon, ChevronDown } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import type { PageProps } from './$types.js';
	import MetaTags from '$lib/components/MetaTags.svelte';

	let { data }: PageProps = $props();
</script>

<MetaTags
	title="Orthotic FAQs & Pricing | Tralee Orthotics"
	description="Common questions about foot care in Kerry. Learn the difference between Prefab (€90) and Custom (€400) insoles, see our transparent pricing, and read about break-in periods."
/>

<div
	class="min-h-screen bg-white font-sans text-slate-600"
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 200 }}
>
	<section class="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
		<nav class="mx-auto max-w-7xl py-4 text-sm text-slate-500">
			<a href="/" class="hover:text-cyan-600">Home</a>
			<span class="mx-2">/</span>
			<span class="font-medium text-slate-900">FAQ</span>
		</nav>
		<div class="mx-auto max-w-4xl px-6 text-center">
			<div
				class="mb-6 inline-flex items-center justify-center rounded-full bg-cyan-100 p-3 text-cyan-600"
			>
				<BadgeQuestionMarkIcon class="h-8 w-8" />
			</div>
			<h1 class="mb-4 text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
			<p class="text-lg text-slate-500">Pricing, procedures, and what to expect.</p>
		</div>
	</section>

	<section class="mx-auto max-w-3xl px-6 py-16">
		<div class="space-y-4">
			{#each data.faqs as item, index}
				<details
					class="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 hover:border-cyan-400"
				>
					<summary
						class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-bold text-slate-900"
					>
						<span>{item.question}</span>
						<span
							class="ml-4 text-cyan-500 transition-transform duration-300 group-open:rotate-180"
						>
							<ChevronDown class="h-5 w-5" />
						</span>
					</summary>

					<div class="prose max-w-none px-6 pb-6 leading-relaxed text-slate-600 prose-slate">
						{@html item.answer}
					</div>
				</details>
			{/each}
		</div>

		<div class="mt-16 rounded-2xl bg-slate-900 p-8 text-center text-white md:p-12">
			<h3 class="mb-4 text-2xl font-bold">Still have questions?</h3>
			<p class="mb-8 text-slate-300">
				Our therapists are happy to discuss your specific requirements over the phone.
			</p>
			<a
				href="tel:0867700191"
				class="inline-block rounded-lg bg-cyan-500 px-8 py-3 font-bold text-slate-900 transition-colors hover:bg-cyan-400"
			>
				Call 086 770 0191
			</a>
		</div>
	</section>
</div>
