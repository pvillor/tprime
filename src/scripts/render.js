const listContacts = document.getElementById("listContacts");

export const render = (arr) => {
	arr.forEach((contact) => {
		const ul = document.createElement("ul");
		ul.classList.add("contactCard");

		for (let key in contact) {
			const li = document.createElement("li");
			li.innerText = `${key.charAt(0).toUpperCase() + key.substring(1)}: ${
				contact[key]
			}`;

			ul.appendChild(li);
		}

		listContacts.appendChild(ul);
	});
};
