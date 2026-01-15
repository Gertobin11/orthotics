import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
    const googleMapAPIKey = env.GOOGLE_MAP_API_KEY
    return {
        googleMapAPIKey
    };
};
