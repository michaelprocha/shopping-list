export default function verifyItem() {
	const item = document.querySelector(".item");
	const mainList = document.querySelector(".main-list");

	if (!item) {
		const buyList = document.querySelector(".buy-list");

		const p = document.createElement("p");
		p.classList.add("buy-list__text");
		p.textContent = "Sua lista está vazia. Adicione itens a ela para não esquecer nada na próxima compra!";
		buyList.append(p);
        
		// mainList.lastElementChild.remove();
	} else {
		if (document.querySelector(".buy-list__text")) {
			document.querySelector(".buy-list__text").remove();

			const div = document.createElement("div");
			div.classList.add("done-list");

			const h1 = document.createElement("h1");
			h1.classList.add("done-list__title");
			h1.textContent = "Comprado";
			const ul = document.createElement("ul");
			ul.classList.add("done-list__list");

			div.append(h1);
			div.append(ul);
			mainList.append(div);
		}
	}
}
