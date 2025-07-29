import { useState, useEffect } from "react";

export default function RunYTD() {
	const [distanceKm, setDistanceKm] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchDistance() {
			try {
				const res = await fetch("/api/running/ytd-total");
				if (!res.ok) throw new Error(`Error: ${res.status}`);

				const data = await res.json();
				const distanceMeters = data.distance;
				if (typeof distanceMeters === "number") {
					setDistanceKm(distanceMeters / 1000);
				} else {
					setError("Distance data not found");
				}
			} catch (err: any) {
				setError(err.message || "Unknown error");
			}
		}

		fetchDistance();
	}, []);

	if (error) return "... hm, Strava is having issues, but its a lot of ";
	if (distanceKm === null) return "hmmm";

	return distanceKm.toFixed(2);
}
