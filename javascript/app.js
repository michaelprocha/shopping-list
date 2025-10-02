import load from "./models/load.js";
import createFullItem from "./models/create.js";
import * as save from "./models/save.js";

const input = document.querySelector(".add-list__input");
const btn = document.querySelector(".add-list__btn");

btn.addEventListener("click", () => {
	if (input.value !== "") {
		const day = new Date().toLocaleString("pt-BR", { weekday: "long" });
		const date = new Date().toLocaleDateString("pt-BR");
		const hour = new Date().toLocaleString("pt-BR", { timeStyle: "medium" });
		const fullDate = `${day} (${date}) ás ${hour}`;
		createFullItem(input.value, fullDate, false);
		save.saveTask();
		input.value = "";
	}
});

const hasItem = load();

// if (hasItem) {
// 	const p = document.createElement('p');
// 	p.classList.add('');
// 	p.textContent = 'Sua lista está vazia. Adicione itens a ela para não esquecer nada na próxima compra!';

// }