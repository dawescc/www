import { serve } from "bun";
import index from "./index.html";
import { readFile, writeFile } from "fs/promises";

const TOKENS_PATH = "./tokens.json";
const REFRESH_THRESHOLD = 3600;

async function getValidStravaToken() {
	let tokens;
	try {
		tokens = JSON.parse(await readFile(TOKENS_PATH, "utf8"));
	} catch (e) {
		throw new Error("Could not read tokens.json: " + (e instanceof Error ? e.message : String(e)));
	}

	const now = Math.floor(Date.now() / 1000);

	if (!tokens.expires_at || tokens.expires_at - now < REFRESH_THRESHOLD) {
		const client_id = process.env.STRAVA_CLIENT_ID || "";
		const client_secret = process.env.STRAVA_CLIENT_SECRET || "";
		const refresh_token = tokens.refresh_token;

		const url = `https://www.strava.com/api/v3/oauth/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token&refresh_token=${refresh_token}`;

		const resp = await fetch(url, { method: "POST" });

		if (!resp.ok) {
			throw new Error(`Failed to refresh Strava token: ${resp.status} ${await resp.text()}`);
		}

		const data = await resp.json();

		tokens.access_token = data.access_token;
		tokens.refresh_token = data.refresh_token;
		tokens.expires_at = data.expires_at;

		await writeFile(TOKENS_PATH, JSON.stringify(tokens, null, 2), "utf8");
	}

	return tokens.access_token;
}

const server = serve({
	routes: {
		"/*": index,
		"/api/running/ytd-total": {
			async GET() {
				const accessToken = await getValidStravaToken();
				const res = await fetch("https://www.strava.com/api/v3/athletes/144880512/stats", {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});

				if (!res.ok) {
					return new Response("Failed to fetch Strava data", { status: res.status });
				}

				const data = await res.json();
				return new Response(JSON.stringify(data.ytd_run_totals), {
					status: 200,
					headers: {
						"Content-Type": "application/json",
					},
				});
			},
		},
	},
	development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
