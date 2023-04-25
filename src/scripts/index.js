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

const contacts = document.getElementById("contacts");
// const teste = document.createElement("h1");
// teste.innerText = "teste";
// contacts.appendChild(teste);

const lastContact = aData[aData.length - 1];

aData.forEach((contact) => {
	const ul = document.createElement("ul");
	ul.classList.add("contactCard");

	// for (let i = 1; i < 4; i++){
	//   const li = document.createElement("li");
	//   li.innerText = `Código: ${}`
	// }
	for (let key in contact) {
		const li = document.createElement("li");
		li.innerText = `${key.charAt(0).toUpperCase() + key.substring(1)}: ${
			contact[key]
		}`;
		ul.appendChild(li);
	}

	contacts.appendChild(ul);
});
