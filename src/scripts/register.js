import { render } from "./render.js";

const listContacts = document.getElementById("listContacts");

const gerarCodigo = (arr) => {
	let maxCodigo = 0;

	arr.forEach((contact) => {
		if (contact.codigo > maxCodigo) {
			maxCodigo = contact.codigo;
		}
	});

	return "00" + String(Number(maxCodigo) + 1);
};

const registerContact = (arr) => {
	const inputs = document.querySelectorAll(".registerInput");
	let emptyInput = 0;

	const newContact = {};

	inputs.forEach((input) => {
		if (input.value === "") {
			emptyInput++;
		}

		newContact[input.name] = input.value;
	});

	if (emptyInput !== 0) {
		return Toastify({
			text: "Preencha todos os campos",
			className: "info",
			style: {
				background: "red",
			},
		}).showToast();
	}

	if (newContact.telefone.length !== 11) {
		return Toastify({
			text: "Telefone inválido",
			className: "info",
			style: {
				background: "red",
			},
		}).showToast();
	}

	const emailAlreadyExists = arr.find(
		(contact) => contact.email === newContact.email
	);

	if (emailAlreadyExists) {
		return Toastify({
			text: "Email em uso",
			className: "info",
			style: {
				background: "red",
			},
		}).showToast();
	}

	newContact.telefone = `(${newContact.telefone.slice(
		0,
		2
	)}) ${newContact.telefone.slice(2, 7)}-${newContact.telefone.slice(7, 11)}`;

	const telefoneAlreadyExists = arr.find(
		(contact) => contact.telefone === newContact.telefone
	);

	if (telefoneAlreadyExists) {
		return Toastify({
			text: "Telefone em uso",
			className: "info",
			style: {
				background: "red",
			},
		}).showToast();
	}

	arr.push({ codigo: gerarCodigo(arr), ...newContact });
};

export const registerEvent = (arr) => {
	const submitButton = document.getElementById("register");

	submitButton.addEventListener("click", (event) => {
		event.preventDefault();

		listContacts.innerHTML = "";

		const currentLenght = arr.length;

		registerContact(arr);
		render(arr);

		if (arr.length > currentLenght) {
			Toastify({
				text: "Contato registrado com sucesso!",
				className: "info",
				style: {
					background: "green",
				},
			}).showToast();
		}
	});
};
