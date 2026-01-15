<script>
	import { Phone, ArrowRight, Truck, CheckCircle2, Package, ScanLine } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	const conditions = [
		'Plantar Fasciitis',
		'Lower Leg Tendinopathy',
		'Localized Foot Pain',
		'Bunions & Hammer Toes',
		'Heel Pain',
		'Leg/Knee/Hip/Back Pain',
		'Fallen Arches / Flat Feet',
		'Shin Splints',
		'Metatarsalgia'
	];
</script>

<div class="bg-white font-sans text-slate-600">
	<section class="relative overflow-hidden bg-slate-900 text-white">
		<div class="absolute inset-0 opacity-20">
			<img
				src="/hex-background.jpg"
				alt="Biomechanical Mesh Background"
				class="h-full w-full object-cover"
			/>
		</div>

		<div class="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div in:fly={{ y: 700, duration: 800 }}>
					<span class="mb-4 block font-bold tracking-widest text-cyan-400 uppercase">
						Tralee Orthotics
					</span>
					<h1 class="mb-6 text-5xl leading-tight font-extrabold tracking-tight md:text-6xl">
						Advanced Foot Care & <br />
						<span class="text-cyan-400">Precision Biomechanics.</span>
					</h1>
					<p class="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
						Our highly qualified therapists provide full assessments to relieve your foot pain. From
						cost-effective prefabricated supports to fully bespoke 3D-scanned prescription devices.
					</p>

					<div class="flex flex-col gap-4 sm:flex-row">
						<a
							href="tel:0867700191"
							class="group flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
						>
							<Phone class="mr-3 h-5 w-5 transition-transform group-hover:rotate-12" />
							Call: 086 770 0191
						</a>
						<a
							href="/orthoses"
							class="flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
						>
							View Range
						</a>
					</div>
				</div>

				<div class="relative hidden lg:block" in:fly={{ y: 700, duration: 1000 }}>
					<div
						class="relative z-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-2 backdrop-blur-sm"
					>
						<img
							src="/hero.webp"
							alt="Custom Orthotic Device"
							class="w-full rounded-xl shadow-2xl"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="products" class="relative z-10 -mt-10 px-6 pb-20">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
			<a
				href="/orthoses/Prefab"
				class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-xl transition-all hover:border-cyan-500 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600"
				>
					<Package class="h-8 w-8" />
				</div>
				<h2 class="mb-2 text-3xl font-bold text-slate-900">Prefabricated Orthoses</h2>
				<p class="mb-4 text-2xl font-bold text-cyan-600">
					€90 <span class="text-sm font-normal text-slate-400">/ All inclusive</span>
				</p>
				<p class="mb-8 grow text-slate-600">
					High-quality off-the-shelf supports. Includes full assessment and fitting. Excellent for
					general correction with a lifespan of 9-12 months.
				</p>
				<p
					class="mt-auto inline-flex items-center font-bold text-cyan-600 transition-colors group-hover:text-cyan-700"
				>
					View Range <ArrowRight class="ml-2 h-5 w-5 transition-all group-hover:ml-5" />
				</p>
			</a>

			<a
				href="/orthoses/Custom"
				class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-xl transition-all hover:border-slate-900 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-900"
				>
					<ScanLine class="h-8 w-8" />
				</div>
				<h2 class="mb-2 text-3xl font-bold text-slate-900">Custom Prescription</h2>
				<p class="mb-4 text-2xl font-bold text-slate-900">
					€400 <span class="text-sm font-normal text-slate-400">/ All inclusive</span>
				</p>
				<p class="mb-8 grow text-slate-600">
					Bespoke devices manufactured from 3D foot scans and gait analysis. The gold standard for
					complex biomechanical issues. No extra charges.
				</p>
				<p
					class="mt-auto inline-flex items-center font-bold text-slate-900 transition-colors group-hover:text-cyan-600"
				>
					View Range <ArrowRight class="ml-2 h-5 w-5" />
				</p>
			</a>
		</div>

		<div class="mx-auto mt-8 max-w-7xl">
			<div
				class="flex flex-col items-center gap-6 rounded-xl border border-cyan-100 bg-cyan-50 p-6 text-cyan-900 md:flex-row"
			>
				<div class="shrink-0 rounded-full bg-cyan-100 p-3 text-cyan-600">
					<Truck class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-lg font-bold">Know your size? Postal Service Available.</h3>
					<p class="text-sm text-cyan-800">
						If you need a replacement pair of <strong>Langer BioAdvanced</strong> orthotics, call us.
						We can organize payment over the phone and post them directly to your address.
					</p>
				</div>
				<div class="md:ml-auto">
					<a
						href="tel:0867700191"
						class="font-bold underline decoration-2 underline-offset-4 hover:text-cyan-600"
						>Call 086 770 0191</a
					>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold text-slate-900">Clinical Excellence in Tralee</h2>
				<div class="prose text-slate-600 prose-slate">
					<p>
						At our clinic in Tralee, we offer a different kind of approach to injury recovery. Both
						the price and quality of the product we offer is better than most competitors.
					</p>
					<p>
						For our <strong>Custom Orthotics</strong>, we utilize modern 3D scanning technology and
						gait analysis. These files are sent to a top production facility in the U.K. where
						devices are manufactured under the supervision of qualified podiatrists.
					</p>
					<div class="not-prose mt-8 rounded-xl border-l-4 border-slate-900 bg-slate-50 p-6">
						<h4 class="mb-2 font-bold text-slate-900">Our Ethical Promise</h4>
						<p class="text-slate-600 italic">
							"We only prescribe orthotics where we feel they are necessary. Many injuries result
							from overuse and simply require rest and physiotherapy."
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-3xl bg-slate-50 p-8 md:p-10">
				<h3 class="mb-8 text-xl font-bold text-slate-900">Conditions We Treat</h3>
				<ul class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
					{#each conditions as item}
						<li class="flex items-start">
							<CheckCircle2 class="mt-0.5 mr-3 h-5 w-5 shrink-0 text-cyan-500" />
							<span class="text-sm font-medium text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
				<div class="mt-8 border-t border-slate-200 pt-8">
					<a
						href="/faq"
						class="flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white py-3 font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-600"
					>
						Read our Frequently Asked Questions
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
