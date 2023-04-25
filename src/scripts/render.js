const listContacts = document.getElementById("listContacts");

export const render = (arr) => {
	arr.forEach((contact) => {
		const card = document.createElement("div");
		card.classList.add("contactCard");

		// for (let key in contact) {
		// 	const li = document.createElement("li");
		// 	li.innerText = `${key.charAt(0).toUpperCase() + key.substring(1)}: ${
		// 		contact[key]
		// 	}`;

		// 	ul.appendChild(li);
		// }
		const name = document.createElement("h3");
		const email = document.createElement("h4");
		const telefone = document.createElement("h4");
		const codigo = document.createElement("p");

		name.classList.add("nome");
		email.classList.add("email");
		telefone.classList.add("telefone");
		codigo.classList.add("codigo");

		name.innerText = contact.nome;
		email.innerText = contact.email;
		telefone.innerText = contact.telefone;
		codigo.innerText = "Código: " + contact.codigo;

		card.appendChild(name);
		card.appendChild(email);
		card.appendChild(telefone);
		card.appendChild(codigo);

		listContacts.appendChild(card);
	});
};
