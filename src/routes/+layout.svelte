<script lang="ts">
	import './layout.css';
	import { fade } from 'svelte/transition';
	// import Footer from '$lib/components/Footer.svelte';
	// import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/state';
	// import Toast from '$lib/components/Toast.svelte';
	// import Policies from '$lib/components/Policies.svelte';
	import ConsentContainer from '$lib/components/ConsentContainer.svelte';

	let showPoliicies = $state(false);

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
	<nav class="fixed top-0 z-50 w-full bg-white ">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-center ">
				<div class="hidden w-full justify-between md:flex text-slate-800">
					<div class="=flex items-center justify-center">
						<a href="/" class="hover:text-primary-100 px-3 py-2 text-3xl font-semibold text-cyan-600  hover:text-cyan-800"
							>Tralee Orthotics</a
						>
					</div>
					<div class="flex items-center justify-end gap-6">
						<a href="/the-experience" class="hover:text-primary-100 text-xl font-medium hover:text-slate-600 hover:underline">HOME</a>
						<a
							href="/my-portfolio"
							class="title hover:text-primary-100 px-3 py-2 font-medium text-xl hover:text-slate-600 hover:underline"
							>PRODUCTS</a
						>
						<a
							href="/about-me"
							class="title hover:text-primary-100 px-3 py-2 font-medium text-xl  hover:text-slate-600 hover:underline"
							>FAQ</a
						>
						<a
							href="/contact-me"
							class="title hover:text-primary-100 px-3 py-2 font-medium text-xl  hover:text-slate-600 hover:underline"
							>APPOINTMENTS</a
						>
					</div>
				</div>

				<!-- Mobile Burger Menu Button -->
				<div class="z-50 flex w-full justify-between md:hidden">
					<a href="/" class="hover:text-primary-100 px-3 py-2 text-3xl font-medium"
						><img class="h-12" src="/guerin-logo-whtsm.png" alt="guerin photography logo" /></a
					>
					<button
						onclick={toggleMobileMenu}
						aria-label="Open main menu"
						class="text-primary-100 inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200"
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
				class="fixed top-0 right-0 z-40 h-[100vh] w-[100vw] !bg-black p-5 shadow-xl md:hidden"
			>
				<div class="flex h-full w-full flex-col space-y-4 pt-12">
					<a
						onclick={closeMobileMenu}
						href="/"
						class="hover:text-primary-100 flex items-end gap-3 px-3 py-2 text-3xl font-medium"
					>
						<p class="title text-primary-500 hover:text-primary-100 text-3xl font-medium">
							Guerin Photography
						</p></a
					>
					<hr class="text-primary-500" />
					<a
						onclick={closeMobileMenu}
						href="/the-experience"
						class="title text-primary-500 hover:text-primary-100 block rounded-md px-3 py-2 text-2xl font-medium"
						>The Experience</a
					>
					<a
						onclick={closeMobileMenu}
						href="/my-portfolio"
						class="title text-primary-500 hover:text-primary-100 block rounded-md px-3 py-2 text-2xl font-medium"
						>My Portfolio</a
					>
					<a
						onclick={closeMobileMenu}
						href="/about-me"
						class="title text-primary-500 hover:text-primary-100 block rounded-md px-3 py-2 text-2xl font-medium"
						>About Me</a
					>
					<a
						onclick={closeMobileMenu}
						href="/contact-me"
						class="title text-primary-500 hover:text-primary-100 block rounded-md px-3 py-2 text-2xl font-medium"
						>Contact Me</a
					>
				</div>
			</div>
		{/if}
	</nav>

	{@render children?.()}
</div>

<!-- <Footer bind:show={showPoliicies} />
<Policies bind:show={showPoliicies} /> -->
<ConsentContainer />
