<script lang="ts">
	import './layout.css';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';
	import ConsentContainer from '$lib/components/ConsentContainer.svelte';

	let { children } = $props();

	let isMobileMenuOpen = $state(false);

	// Function to toggle the mobile menu state.
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	// Function to close the mobile menu, useful for link clicks or closing via the overlay.
	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="MyWebSite" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="relative min-h-screen w-full overflow-x-hidden">
	<nav class="fixed top-0 z-50 w-full bg-slate-900">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-center">
				<div class="hidden w-full justify-between text-slate-800 md:flex">
					<div class="=flex items-center justify-center">
						<a
							href="/"
							class="px-3 py-2 text-3xl font-semibold text-cyan-600 hover:text-cyan-800"
							><span class="text-white">Tralee </span> Orthotics</a
						>
					</div>
					<div class="flex items-center justify-end gap-6">
						<a href="/" class="text-xl font-medium text-white hover:text-cyan-500"
							>Home</a
						>
						<a href="/orthoses" class="text-xl font-medium text-white hover:text-cyan-500"
							>Orthoses</a
						>
						<a href="/faq" class="text-xl font-medium text-white hover:text-cyan-500">FAQ</a>
						<a href="/appointments" class="text-xl font-medium text-white hover:text-cyan-500"
							>Appointments</a
						>
					</div>
				</div>

				<!-- Mobile Burger Menu Button -->
				<div class="z-50 flex w-full justify-between md:hidden">
					<a
						href="/"
						class="hover:text-primary-100 px-3 py-2 text-3xl font-semibold text-cyan-600 hover:text-cyan-800"
						><span class="text-white">Tralee </span> Orthotics</a
					>
					<button
						onclick={toggleMobileMenu}
						aria-label="Open main menu"
						class="inline-flex items-center justify-center rounded-md p-2 text-cyan-500 hover:bg-gray-200"
					>
						<!-- Conditionally render burger or close icon -->
						{#if !isMobileMenuOpen}
							<!-- Burger Icon -->
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						{:else}
							<!-- Close Icon (X) -->
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div
				transition:fade={{ duration: 200 }}
				class="fixed top-0 right-0 z-40 h-screen w-screen bg-slate-900 p-5 shadow-xl md:hidden"
			>
				<div class="flex h-full w-full flex-col space-y-4 pt-12">
					<hr class="text-cyan-500" />
                    <a
						onclick={closeMobileMenu}
						href="/"
						class="title text-white hover:text-cyan-500 block rounded-md px-3 py-2 text-2xl font-medium"
						>Home</a
					>
					<a
						onclick={closeMobileMenu}
						href="/orthoses"
						class="title text-white hover:text-cyan-500 block rounded-md px-3 py-2 text-2xl font-medium"
						>Orthoses</a
					>
					<a
						onclick={closeMobileMenu}
						href="/faq"
						class="title text-white hover:text-cyan-500 block rounded-md px-3 py-2 text-2xl font-medium"
						>FAQ</a
					>
					<a
						onclick={closeMobileMenu}
						href="/appointments"
						class="title text-white hover:text-cyan-500 block rounded-md px-3 py-2 text-2xl font-medium"
						>Appointments</a
					>
				</div>
			</div>
		{/if}
	</nav>

	{@render children?.()}
</div>

<Footer />
<ConsentContainer />
