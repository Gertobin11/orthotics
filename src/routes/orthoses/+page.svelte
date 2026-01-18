<script>
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { Phone, ArrowRight, Truck, BadgeQuestionMark, CircleCheckBig } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	const categories = [
		{
			name: 'Prefabricated Orthotics',
			price: 90,
			slug: 'Prefab',
			summary:
				'High-quality, off-the-shelf support. Corrects over-pronation/supination. Fitting included.'
		},
		{
			name: 'Custom Prescription',
			price: 400,
			slug: 'Custom',
			summary:
				'Bespoke medical devices made from 3D scans. Full gait analysis & biomechanical assessment included.'
		}
	];

</script>

<MetaTags
	title="Orthotics Range Tralee | Custom & Prefabricated Supports" description="Choose the right support for your feet. We offer medical-grade prefabricated insoles (€90) and bespoke 3D-scanned custom orthotics (€400). Full assessment and fitting included."
/>

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
				<span class="font-medium text-slate-900">Orthoses</span>
			</nav>
			<div class="max-w-3xl">
				<span class="my-2 block text-sm font-bold tracking-wider text-cyan-600 uppercase">
					Tralee Orthotics
				</span>
				<h1 class="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
					Advanced Foot Care & <br class="hidden md:block" />
					<span class="text-cyan-600">Precision Biomechanics.</span>
				</h1>
				<p class="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
					Our highly qualified therapists will complete a full assessment of your foot pain to
					ascertain exactly what type of orthotic you require.
				</p>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="tel:0867700191"
						class="flex items-center justify-center gap-4 rounded-xl bg-cyan-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:text-white hover:shadow-2xl"
					>
						<Phone></Phone>
						Book Appointment: 086 770 0191
					</a>
				</div>
			</div>
			<div class="absolute top-1/2 right-0.5 hidden -translate-y-1/2 lg:flex">
				<img
					src="/orthoses-banner.png"
					alt="Tralee Orthotics Custom Orthotic"
					class=" h-full w-full object-cover"
				/>
			</div>
		</div>
	</section>

	<section class="relative z-10 mx-auto -mt-10 max-w-7xl px-6 py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each categories as cat}
				<a
					href="/orthoses/{cat.slug}"
					class="group relative flex h-full flex-col items-start rounded-2xl border border-gray-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
				>
					<div
						class="absolute top-6 right-6 rounded-full bg-cyan-600 px-4 py-2 font-bold text-white"
					>
						€{cat.price}
					</div>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white"
					>
						<ArrowRight />
					</div>
					<h2 class="mb-2 text-2xl font-bold text-slate-900">{cat.name}</h2>
					<p class="mb-6 text-slate-500">{cat.summary}</p>
					<span
						class="mt-auto inline-flex items-center font-semibold text-cyan-600 transition-transform group-hover:translate-x-1"
					>
						Browse Range &rarr;
					</span>
				</a>
			{/each}
		</div>

		<div
			class="mt-8 flex flex-col items-start gap-4 rounded-xl border border-blue-100 bg-blue-50 p-6 md:flex-row md:items-center"
		>
			<Truck color="#0891b2" />
			<div>
				<h3 class="font-bold text-blue-900">Need a replacement pair?</h3>
				<p class="mt-1 text-sm text-blue-800">
					If you know the size/style of the <strong>Langer BioAdvanced</strong> orthotic you require,
					call us. We can organize payment over the phone and post them directly to your address.
				</p>
			</div>
		</div>
	</section>
</div>
