// import { aData } from "../scripts/database";
// import { registerContact } from "./register";

const aData = [
	{
		codigo: "001001",
		nome: "Jose da Silva",
		email: "jose@email.com",
		telefone: "(11) 99901-1234",
	},
	{
		codigo: "001002",
		nome: "Marcio de Souza",
		email: "marcio@email.com",
		telefone: "(11) 99902-1234",
	},
	{
		codigo: "001003",
		nome: "Mauricio Cruz",
		email: "mauricio@email.com",
		telefone: "(11) 99903-1234",
	},
	{
		codigo: "001004",
		nome: "Fabiana Dias",
		email: "fabiana@email.com",
		telefone: "(11) 99904-1234",
	},
];

const listContacts = document.getElementById("listContacts");

const render = (arr) => {
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

const gerarCodigo = () => {
	let maxCodigo = 0;

	aData.forEach((contact) => {
		if (contact.codigo > maxCodigo) {
			maxCodigo = contact.codigo;
		}
	});

	return "00" + String(Number(maxCodigo) + 1);
};

const addContact = (contact) => {
	const newCod = gerarCodigo();
	contacts.push({ codigo: newCod, ...contact });
};

const formContact = document.getElementById("formContact");

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
		alert("Preencha todos os campos");
	}

	newContact.telefone = `(${newContact.telefone.slice(
		0,
		2
	)}) ${newContact.telefone.slice(2, 7)}-${newContact.telefone.slice(7, 11)}`;

	arr.push({ codigo: gerarCodigo(), ...newContact });
};

const registerEvent = (arr) => {
	const submitButton = document.getElementById("register");

	submitButton.addEventListener("click", (event) => {
		event.preventDefault();

		listContacts.innerHTML = "";
		registerContact(arr);
		render(arr);
	});
};

render(aData);
registerEvent(aData);
