<script lang="ts">
    import 'vanilla-cookieconsent/dist/cookieconsent.css';
    import * as CookieConsent from 'vanilla-cookieconsent';
    import { onMount } from 'svelte';

    onMount(async () => {
        CookieConsent.run({
            
            autoShow: true,
           
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true
                }
            },

            language: {
                default: 'en',
                translations: {
                    en: {
                        consentModal: {
                            title: 'Your Privacy',
                            description: 'We use essential cookies to ensure this website functions correctly. We do not use any tracking or analytics cookies. For more details, please review our Privacy Policy.',
                            
                            acceptAllBtn: 'Accept and Close'
                        },
                        
                        preferencesModal: {sections: []}
                    }
                }
            }
        });

    });
</script>