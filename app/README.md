# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

Links
https://developers.strava.com/docs/getting-started/
https://developers.strava.com/docs/authentication/
https://www.strava.com/settings/api
https://developers.strava.com/playground/#/

Manual flow (to be later automated)

Auth
Visit https://www.strava.com/oauth/authorize?client_id={CLIENTID}&redirect_uri=http://localhost&response_type=code&approval_prompt=auto&scope=read_all,activity:read_all

Extract the code param from the URL it redirects to

Do a strava POST auth request in postman 
Now you can do any strava requests for the user

First we will get user's activities
Then extract map polyline, we will need to decode it to get coords https://stackoverflow.com/questions/48017792/strava-api-how-to-get-route-image


