import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { CLIENT_ID } from '$env/static/private';

// Redirect to Strava for Auth. Strava will redirect back to our route with user's code
export const load: LayoutServerLoad = () => {
	redirect(
		307,
		`https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:5173/callback&response_type=code&approval_prompt=auto&scope=read_all,activity:read_all`
	);
};
