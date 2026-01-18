<script>
  import { Phone, Mail, MapPin, ArrowRight } from '@lucide/svelte';
  
  const year = new Date().getFullYear();
</script>

<footer class="bg-slate-900 text-slate-300 font-sans border-t-4 border-cyan-500">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white tracking-tight">
          Tralee <span class="text-cyan-500">Orthotics</span>
        </h2>
        <p class="text-sm leading-relaxed text-slate-400">
          Advanced injury recovery and rehabilitation through precision biomechanics. We combine expert assessment with modern 3D scanning technology to provide stability and relief.
        </p>
        <div class="pt-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead Therapist</p>
          <p class="text-white">Eddie O' Grady <span class="text-slate-500 text-xs">BSc.(hons.) MIAPT</span></p>
        </div>
      </div>

      <div>
        <h3 class="text-white font-bold mb-6">Quick Links</h3>
        <ul class="space-y-3 text-sm">
          <li>
            <a href="/" class="hover:text-cyan-500 transition-colors flex items-center group">
              <ArrowRight class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"/>
              Home
            </a>
          </li>
          <li>
            <a href="/orthoses/Prefab" class="hover:text-cyan-500 transition-colors flex items-center group">
              <ArrowRight class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"/>
              Prefabricated Range
            </a>
          </li>
          <li>
            <a href="/orthoses/Custom" class="hover:text-cyan-500 transition-colors flex items-center group">
              <ArrowRight class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"/>
              Custom Prescription
            </a>
          </li>
          <li>
            <a href="/faq" class="hover:text-cyan-500 transition-colors flex items-center group">
              <ArrowRight class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"/>
              FAQ
            </a>
          </li>
                    <li>
            <a href="/appointments" class="hover:text-cyan-500 transition-colors flex items-center group">
              <ArrowRight class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"/>
              Appointments
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-6">Contact Us</h3>
        <ul class="space-y-4 text-sm">
          <li class="flex items-start">
            <MapPin class="w-5 h-5 text-cyan-500 mr-3 shrink-0 mt-0.5" />
            <span>
              36 Oakview, Brewery Road,<br>
              Tralee, Co. Kerry,<br>
              V92 HYEO
            </span>
          </li>
          <li class="flex items-center">
            <Phone class="w-5 h-5 text-cyan-500 mr-3 shrink-0" />
            <a href="tel:0867700191" class="hover:text-white transition-colors">086-7700191</a>
          </li>
          <li class="flex items-center">
            <Mail class="w-5 h-5 text-cyan-500 mr-3 shrink-0" />
            <a href="mailto:eddieogradyphysicaltherapy1@gmail.com" class="hover:text-white transition-colors truncate">
              eddieogradyphysicaltherapy1@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-6">Opening Hours</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex justify-between border-b border-slate-800 pb-2">
            <span>Mon / Tue / Thu / Fri</span>
            <span class="text-white">8am - 10pm</span>
          </li>
          <li class="flex justify-between border-b border-slate-800 pb-2">
            <span>Wednesday</span>
            <span class="text-slate-500 italic">Closed</span>
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

  <div class="bg-slate-950 py-6 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
      <p>&copy; {year} Tralee Orthotics. All rights reserved.</p>
      <div class="flex items-center gap-4 mt-4 md:mt-0">
        <a href="/privacy" class="hover:text-cyan-500 transition-colors">Privacy Policy</a>
        <span>|</span>
        <span>Designed & Developed by Ger Tobin</span>
      </div>
    </div>
  </div>
</footer>