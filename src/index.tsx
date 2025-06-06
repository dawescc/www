import { serve } from "bun";
// We no longer need to import the data directly here,
// as we will read it on demand to ensure we always have the latest version.

const API_SECRET_KEY = Bun.env.API_SECRET_KEY;
const DATA_PATH = "src/data.json"; // Define path as a constant for easy reuse

if (!API_SECRET_KEY) {
	console.error("Error: API_SECRET_KEY is not set in the .env file.");
	process.exit(1);
}

// Reusable function for authentication. This cleans up our route handlers.
function authenticate(req: Request): boolean {
	const authHeader = req.headers.get("Authorization");
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return false;
	}
	const suppliedKey = authHeader.split(" ")[1];
	return suppliedKey === API_SECRET_KEY;
}

const server = serve({
	routes: {
		"/": {
			async GET() {
				const content = await Bun.file(DATA_PATH).json();
				return Response.json(content);
			},
		},
		"/edit": {
			async PUT(req) {
				if (!authenticate(req)) {
					return Response.json({ error: "Unauthorized." }, { status: 401 });
				}
				try {
					const newContent = await req.json();
					await Bun.write(DATA_PATH, JSON.stringify(newContent, null, 2));
					return Response.json({
						message: "Success. Content Replaced.",
						content: newContent,
					});
				} catch (error) {
					return Response.json({ error: "Invalid JSON in request body." }, { status: 400 });
				}
			},

			async PATCH(req) {
				if (!authenticate(req)) {
					return Response.json({ error: "Unauthorized." }, { status: 401 });
				}
				try {
					const currentContent = await Bun.file(DATA_PATH).json();
					const patchContent = await req.json();
					const newContent = { ...currentContent, ...patchContent };
					await Bun.write(DATA_PATH, JSON.stringify(newContent, null, 2));

					return Response.json({
						message: "Content patched successfully!",
						newData: newContent,
					});
				} catch (error) {
					return Response.json({ error: "Invalid JSON in request body or file read error." }, { status: 400 });
				}
			},
		},
	},

	development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
