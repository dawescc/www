import { serve } from "bun";

type JSONValue = string | number | boolean | null | JSONObject | { [x: string]: JSONValue };

interface JSONObject {
	[x: string]: JSONValue;
}

const DATA_PATH = "src/data.json" as const;

if (!DATA_PATH) {
	console.error("Error: DATA_PATH not found.");
	process.exit(1);
}

const server = serve({
	routes: {
		"/*": {
			async GET(req) {
				const url = new URL(req.url);
				const pathname = url.pathname;
				const content = await Bun.file(DATA_PATH).json();
				if (typeof content !== "object" || content === null || Array.isArray(content)) {
					return Response.json({ error: "Server data is not a valid JSON object." }, { status: 500 });
				}

				if (pathname === "/") {
					return Response.json(content);
				}

				const keys = pathname.split("/").filter((key) => key.length > 0);

				let currentObject: JSONValue = content;
				for (const key of keys) {
					if (typeof currentObject === "object" && currentObject !== null && Object.hasOwn(currentObject, key)) {
						currentObject = currentObject[key];
					} else {
						return new Response("Not Found", { status: 404 });
					}
				}

				const lastKey = keys[keys.length - 1];
				return Response.json({ [lastKey]: currentObject });
			},
		},
	},

	development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
