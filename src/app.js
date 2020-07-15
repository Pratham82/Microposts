import { http } from "./easyHTTP";
import { ui } from "./ui";

//Get Posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Get Post from the json server
function getPosts() {
	http.get("http://localhost:3000/posts")
		// Adding the post to UI
		.then((res) => ui.showPosts(res))
		.catch((err) => console.log(err));
}

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

//Listen for delete post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for update post
document.querySelector("#posts").addEventListener("click", enableEdit);

// ListItem for cancel button
document.querySelector(".card-form").addEventListener("click", cancelEdit);

// Add the posts
function submitPost() {
	// Get the data from the form

	const title = document.querySelector("#title").value;
	const body = document.querySelector("#body").value;
	const id = document.querySelector("#id").value;

	const data = {
		// Because we are using ES6 syntax we don't have to assign title and body it will consider the variables as is it was created in the function
		title,
		body,
	};

	// If the user tries to post without any data we will show the alert
	if (title === "" || body === "") {
		ui.showAlert("Please enter value in the fields", "alert alert-danger");
	} else {
		// Check for id
		if (id === "") {
			//* Create new post if the ID is not present
			//* Create post request to add our post to json server
			// Once we get the data we will call the get method again to see the data in the UI
			http.post("http://localhost:3000/posts", data)
				.then((data) => {
					//Show alert that data has been added
					ui.showAlert("New post added", "alert alert-success");

					// function for clearing the input fields
					ui.clearFields();
					// Add the new post to UI
					getPosts();
				})
				.catch((err) => console.log(err));
		} else {
			//* ID already exists so we have to update the post
			//* PUT request

			http.put(`http://localhost:3000/posts/${id}`, data)
				.then((data) => {
					//Show alert that data has been added
					ui.showAlert("Post Updated", "alert alert-success");

					// function for clearing the input fields
					ui.changeFormState("add");
					// Add the new post to UI
					getPosts();
				})
				.catch((err) => console.log(err));
		}
	}
}

// Delete post
function deletePost(e) {
	if (e.target.parentElement.classList.contains("delete")) {
		const id = e.target.parentElement.dataset.id;
		//console.log(id);
		if (confirm("Are you sure?")) {
			http.delete(`http://localhost:3000/posts/${id}`)
				.then((data) => {
					ui.showAlert("Post removed", "alert alert-danger");
					getPosts();
				})
				.catch((err) => console.log(err));
		}
	}
	e.preventDefault();
}

// Edit the posts
function enableEdit(e) {
	if (e.target.parentElement.classList.contains("edit")) {
		const id = e.target.parentElement.dataset.id;
		const body = e.target.parentElement.previousElementSibling.textContent;
		const title =
			e.target.parentElement.previousElementSibling.previousElementSibling
				.textContent;

		const data = {
			id,
			title,
			body,
		};

		//* Fill from with the older data
		ui.fillForm(data);
	}
	e.preventDefault();
}

// Cancel the edit state
function cancelEdit(e) {
	if (e.target.classList.contains("post-cancel")) {
		ui.changeFormState("add");
	}

	e.preventDefault();
}
