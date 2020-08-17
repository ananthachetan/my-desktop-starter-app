import { ajax, handlerErrors } from "./helper";

export function getData() {
	return ajax({
		url: "https://api.covid19india.org/districts_daily.json",
		method: "GET",
	})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return handlerErrors(error);
		});
}
