import { GenericError } from "../models/response/error";

const FIC_ENDPOINT = "https://api.fattureincloud.it/v1";

export async function call<R, B = any>(path: string, body?: B): Promise<R | GenericError> {
	const res = await fetch(`${FIC_ENDPOINT}${path}`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	});
	return res.json();
}
