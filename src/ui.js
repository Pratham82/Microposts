class UI {
	constructor() {
		this.post = document.querySelector("#posts");
		this.titleInput = document.querySelector("#title");
		this.bodyInput = document.querySelector("#body");
		this.idInput = document.querySelector("#id");
		this.postSubmit = document.querySelector(".post-submit");
		this.forState = "add";
	}

	showPosts(data) {
		let op = "";
		data.map((post) => {
			op += `
            <div class='card mb-3'>
                <div class='card-body'>
                    <h4 class='card-title'>${post.title}</h4>
					<p class='card-text'>${post.body}</p>
					
					<a href='#' class='edit card-link'
					data-id='${post.id}' style='color:blue';>
						<i class='fa fa-pencil'> </i>
					</a>

					&nbsp; &nbsp;
					
					<a href="#" class="delete card-link"
					 data-id="${post.id}" style='color:red';>
					<i class='fa fa-remove'></i>
					</a>
                </div>
            </div>
            
            `;
		});

		this.post.innerHTML = op;
	}

	showAlert(message, className) {
		// Create new div
		const div = document.createElement("div");

		// Add text content that we passed in from the app.js
		div.appendChild(document.createTextNode(message));

		// Add alert class name
		div.className = className;

		// Add the div to parent
		// get parent
		const container = document.querySelector(".postsContainer");

		//get posts
		const posts = document.querySelector("#posts");

		// Add our alert div to DOM inside the container just before the posts
		container.insertBefore(div, posts);

		// Timeout for alert
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}
	clearAlert() {
		const currentAlert = document.querySelector(".alert");

		// Remove the alert class from the div after 3 secs
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	clearFields() {
		this.titleInput.value = "";
		this.bodyInput.value = "";
		console.log("clear fields");
	}

	// Fill form while editing
	fillForm(data) {
		// Add data to the input fields
		this.titleInput.value = data.title;
		this.bodyInput.value = data.body;
		this.idInput.value = data.id;

		console.log("Fill from triggered");

		this.changeFormState("edit");
	}

	// Clear ID form hidden field
	clearIdInput() {
		this.idInput.value = "";
	}

	changeFormState(type) {
		if (type === "edit") {
			this.postSubmit.textContent = "Update the post";
			this.postSubmit.className = "post-submit btn btn-warning btn-block";

			// Create a cancel button
			const cancelBtn = document.createElement("button");
			cancelBtn.className = "post-cancel btn btn-secondary btn-block";
			cancelBtn.appendChild(document.createTextNode("Cancel update"));

			// Get parent
			const cardForm = document.querySelector(".card-form");

			// Get elements to insert before
			const formEnd = document.querySelector(".form-end");

			// Insert cancel button
			cardForm.insertBefore(cancelBtn, formEnd);
		} else {
			// Add if not update
			this.postSubmit.textContent = "Post It 📧";
			this.postSubmit.className = "post-submit btn btn-info btn-block";

			// Remove the cancel update option
			if (document.querySelector(".post-cancel")) {
				document.querySelector(".post-cancel").remove();
			}

			// Clear ID form hidden field
			this.clearIdInput();

			// Clear input fields
			this.clearFields();
		}
	}
}

export const ui = new UI();
