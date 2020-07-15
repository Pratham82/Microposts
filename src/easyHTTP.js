/*
 * Easy HTTP library
 * Library for making HTTP requests
 * Added async await features
 *
 * @version 3.0.0
 * @author Prathamesh Mali
 * @license MIT
 *
 */

class EasyHTTP {
	//Here we will convert the old functions into async function

	//Make a HTTP GET request
	async get(url) {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
	//Make a HTTP POST request
	async post(url, data) {
		// While making a POST Request we have to add in object with some info
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const update = await response.json();
		return update;
	}

	// Make an update PUT request
	async put(url, data) {
		// PUT is very similar to POST we jut have to change the method type from POST to put, so it will update the data
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const putData = await response.json();
		return putData;
	}

	//Delete method
	async delete(url) {
		// PUT is very similar to POST we jut have to change the method type from POST to put, so it will update the data
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		});

		const del = await "Resource deleted...";
		return del;
	}
}

// Export the class

// Instantiating the class
export const http = new EasyHTTP();
