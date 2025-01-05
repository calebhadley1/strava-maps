import type { PageLoad } from './$types';

// https://svelte.dev/docs/kit/load#Using-URL-data-url
export const load: PageLoad = ({ url: url }) => {
	console.log(url.searchParams.get('code'));
};
