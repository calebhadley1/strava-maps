/// <reference types="polyline" />

import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => get_strava_data)
  .get("/auth", ({ redirect }) => {
    return redirect(`https://www.strava.com/oauth/authorize?client_id=${Bun.env.CLIENT_ID}&redirect_uri=http://localhost&response_type=code&approval_prompt=auto&scope=read_all,activity:read_all`);
  })
  .listen(3000);

function get_strava_data() {
  return "Hello World";
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

