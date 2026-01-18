<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types.js';
	import { importLibrary, setOptions } from '@googlemaps/js-api-loader';
	import { CalendarClock, Mail, MapPin, Phone } from '@lucide/svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';

	let { data }: PageProps = $props();

	let mapElement: HTMLDivElement;
	let marker: google.maps.marker.AdvancedMarkerElement;

	onMount(async () => {
		setOptions({
			key: data.googleMapAPIKey
		});

		const { Map } = await importLibrary('maps');
		const { AdvancedMarkerElement } = await importLibrary('marker');

		// initialise the elements
		const map = new Map(mapElement, {
			center: {
				lat: 52.27408769525058,
				lng: -9.698069969487184
			},
			zoom: 17,
			mapId: 'create-game-map-id'
		});

		marker = new AdvancedMarkerElement({
			position: {
				lat: 52.27408769525058,
				lng: -9.698069969487184
			},
			map
		});
	});
</script>

<MetaTags
	title="Book an Appointment | Tralee Orthotics"
	description="Arrange your full biomechanical assessment in Tralee, Co. Kerry. Contact Eddie O' Grady by phone (086-7700191) or email. Appointment only."
/>

<section class="bg-slate-50 py-16 md:py-32">
    <nav class="mx-auto max-w-7xl py-4 text-sm text-slate-500">
			<a href="/" class="hover:text-cyan-600">Home</a>
			<span class="mx-2">/</span>
			<span class="font-medium text-slate-900">Appointments</span>
		</nav>
	<div class="mx-auto mb-12 max-w-3xl px-6 text-center">
		<div
			class="mb-6 inline-flex items-center justify-center rounded-full bg-cyan-100 p-3 text-cyan-600"
		>
			<CalendarClock class="h-8 w-8" />
		</div>
		<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Arrange an Appointment</h2>
		<p class="text-lg leading-relaxed text-slate-600">
			We operate on an appointment-only basis. Please contact us directly by
			<strong>phone</strong> or <strong>email</strong> to book your assessment.
		</p>
	</div>
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<a
				href="https://maps.app.goo.gl/p8hC7pZrdp6pfgP79"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white"
				>
					<MapPin class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-slate-900">Location</h3>
				<p class="text-sm leading-relaxed text-slate-600">
					Tralee Orthotics <br />
					36 Oakview, Brewery Road, <br />
					Tralee, Co. Kerry, V92 HYEO
				</p>
			</a>

			<a
				href="mailto:eddieogradyphysicaltherapy1@gmail.com"
				class="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white"
				>
					<Mail class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-slate-900">Email</h3>
				<p class="text-sm break-all text-slate-600">eddieogradyphysicaltherapy1@gmail.com</p>
			</a>

			<a
				href="tel:0867700191"
				class="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<div
					class="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white"
				>
					<Phone class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-bold text-slate-900">Phone</h3>
				<p class="text-lg font-bold text-slate-600">086-7700191</p>
				<span
					class="mt-1 text-xs font-medium text-cyan-600 opacity-0 transition-opacity group-hover:opacity-100"
				>
					Book Appointment &rarr;
				</span>
			</a>
		</div>
	</div>
</section>

<div class="h-96 w-full overflow-hidden rounded-lg">
	<div class="h-full w-full" bind:this={mapElement}></div>
</div>
