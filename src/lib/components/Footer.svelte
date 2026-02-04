<script>
	import { Phone, Mail, MapPin, ArrowRight } from '@lucide/svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t-4 border-cyan-500 bg-slate-900 font-sans text-slate-300">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4">
				<h2 class="text-2xl font-bold tracking-tight text-white">
					Tralee <span class="text-cyan-500">Orthotics</span>
				</h2>
				<p class="text-sm leading-relaxed text-slate-400">
					Advanced injury recovery and rehabilitation through precision biomechanics. We combine
					expert assessment with modern 3D scanning technology to provide stability and relief.
				</p>
				<div class="pt-2">
					<p class="text-xs font-semibold tracking-wider text-slate-500 uppercase">
						Lead Therapist
					</p>
					<p class="text-white">
						Eddie O' Grady <span class="text-xs text-slate-500">BSc.(hons.) MIAPT</span>
					</p>
				</div>
				<div class="pt-2">
					<p class="text-xs font-semibold tracking-wider text-slate-500 uppercase">
						Looking for extra physiotherapy?
					</p>
					<p class="text-white">
						<span class="text-xs text-slate-500">Please visit: </span> <a
							class="hover:text-cyan-500"
							href="https://www.physiotherapiststralee.ie/"
							target="_blank"> Physiotherapists Tralee</a
						>
					</p>
				</div>
			</div>

			<div>
				<h3 class="mb-6 font-bold text-white">Quick Links</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a href="/" class="group flex items-center transition-colors hover:text-cyan-500">
							<ArrowRight
								class="mr-2 h-3 w-3 text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
							/>
							Home
						</a>
					</li>
					<li>
						<a
							href="/orthoses/Prefab"
							class="group flex items-center transition-colors hover:text-cyan-500"
						>
							<ArrowRight
								class="mr-2 h-3 w-3 text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
							/>
							Prefabricated Range
						</a>
					</li>
					<li>
						<a
							href="/orthoses/Custom"
							class="group flex items-center transition-colors hover:text-cyan-500"
						>
							<ArrowRight
								class="mr-2 h-3 w-3 text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
							/>
							Custom Prescription
						</a>
					</li>
					<li>
						<a href="/faq" class="group flex items-center transition-colors hover:text-cyan-500">
							<ArrowRight
								class="mr-2 h-3 w-3 text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
							/>
							FAQ
						</a>
					</li>
					<li>
						<a
							href="/appointments"
							class="group flex items-center transition-colors hover:text-cyan-500"
						>
							<ArrowRight
								class="mr-2 h-3 w-3 text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
							/>
							Appointments
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-6 font-bold text-white">Contact Us</h3>
				<ul class="space-y-4 text-sm">
					<li class="flex items-start">
						<MapPin class="mt-0.5 mr-3 h-5 w-5 shrink-0 text-cyan-500" />
						<span>
							36 Oakview, Brewery Road,<br />
							Tralee, Co. Kerry,<br />
							V92 HYEO
						</span>
					</li>
					<li class="flex items-center">
						<Phone class="mr-3 h-5 w-5 shrink-0 text-cyan-500" />
						<a href="tel:0867700191" class="transition-colors hover:text-white">086-7700191</a>
					</li>
					<li class="flex items-center">
						<Mail class="mr-3 h-5 w-5 shrink-0 text-cyan-500" />
						<a
							href="mailto:eddieogradyphysicaltherapy1@gmail.com"
							class="truncate transition-colors hover:text-white"
						>
							eddieogradyphysicaltherapy1@gmail.com
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-6 font-bold text-white">Opening Hours</h3>
				<ul class="space-y-2 text-sm">
					<li class="flex justify-between border-b border-slate-800 pb-2">
						<span>Weekdays</span>
						<span class="text-white">8am - 10pm</span>
					</li>

					<li class="flex justify-between border-b border-slate-800 pb-2">
						<span>Saturday</span>
						<span class="text-white">8am - 2pm</span>
					</li>
					<li class="flex justify-between pt-2">
						<span>Sunday</span>
						<span class="text-slate-500 italic">Closed</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="bg-slate-950 px-6 py-6">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between text-xs text-slate-500 md:flex-row"
		>
			<p>&copy; {year} Tralee Orthotics. All rights reserved.</p>
			<div class="mt-4 flex items-center gap-4 md:mt-0">
				<a href="/privacy" class="transition-colors hover:text-cyan-500">Privacy Policy</a>
				<span>|</span>
				<span>Designed & Developed by Ger Tobin</span>
			</div>
		</div>
	</div>
</footer>
