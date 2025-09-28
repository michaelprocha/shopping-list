// const buyList = document.querySelector(".buy-list__list");
// const doneList = document.querySelector(".done-list__list");
const input = document.querySelector(".add-list__input");
const btn = document.querySelector(".add-list__btn");

class ObjTaskDone {
	constructor(setText, setDate) {
		this.text = setText;
		this.date = setDate;
		this.done = true;
	}
}

class ObjTask {
	constructor(setText, setDate) {
		this.text = setText;
		this.date = setDate;
		this.done = false;
	}
}

function name(params) {
	
}

function saveData(fullData) {
	saveJson = JSON.stringify(save);
	localStorage.setItem(data, saveJson);
}

function createItem() {
	const newItem = document.createElement("li");
	newItem.classList.add("item");
	return newItem;
}

function createTrashEvent(trash) {
	trash.addEventListener("mouseenter", () => {
		trash.setAttribute("src", "images/trash-red.svg");
	});
	trash.addEventListener("mouseleave", () => {
		trash.setAttribute("src", "images/trash-black.svg");
	});
	trash.addEventListener("click", () => {
		trash.parentElement.parentElement.parentElement.remove();
	});
}

function createEditEvent(edit) {
	edit.addEventListener("mouseenter", () => {
		edit.setAttribute("src", "images/edit-red.svg");
	});
	edit.addEventListener("mouseleave", () => {
		edit.setAttribute("src", "images/edit-black.svg");
	});
	edit.addEventListener("click", () => {
		if (edit.parentElement.previousElementSibling.lastElementChild.getAttribute("type")) {
			if (edit.parentElement.previousElementSibling.firstElementChild.getAttribute("src") === "images/checkbox-done.svg") {
				const newText = document.createElement("p");
				newText.classList.add("item__task");
				newText.classList.add("item__task--done");
				newText.textContent = edit.parentElement.previousElementSibling.lastElementChild.value;
				edit.parentElement.previousElementSibling.lastElementChild.remove();
				edit.parentElement.previousElementSibling.append(newText);
			} else {
				const newText = document.createElement("p");
				newText.classList.add("item__task");
				newText.textContent = edit.parentElement.previousElementSibling.lastElementChild.value;
				edit.parentElement.previousElementSibling.lastElementChild.remove();
				edit.parentElement.previousElementSibling.append(newText);
			}
		} else {
			const edited = document.createElement("input");
			edited.classList.add("item__task");
			edited.setAttribute("type", "text");
			edited.value = edit.parentElement.previousElementSibling.lastElementChild.textContent;
			edit.parentElement.previousElementSibling.lastElementChild.remove();
			edit.parentElement.previousElementSibling.append(edited);
			edited.focus();
		}
	});
}

function createCheckboxEvent(checkbox) {
	checkbox.addEventListener("click", () => {
		if (checkbox.getAttribute("src") === "images/checkbox.svg") {
			checkbox.setAttribute("src", "images/checkbox-done.svg");
			checkbox.nextElementSibling.classList.add("item__task--done");
			const doneList = document.querySelector(".done-list__list");
			doneList.append(checkbox.parentElement.parentElement.parentElement);
		} else {
			checkbox.setAttribute("src", "images/checkbox.svg");
			checkbox.nextElementSibling.classList.remove("item__task--done");
			const buyList = document.querySelector(".buy-list__list");
			buyList.append(checkbox.parentElement.parentElement.parentElement);
		}
	});
}

function createMainInfo(textItem) {
	const mainInfo = document.createElement("div");
	mainInfo.classList.add("item__main-info");

	const itemData = document.createElement("div");
	itemData.classList.add("item__data");

	const img = document.createElement("img");
	img.classList.add("item__checkbox");
	img.setAttribute("src", "images/checkbox.svg");
	createCheckboxEvent(img);

	const newText = document.createElement("p");
	newText.classList.add("item__task");
	newText.textContent = textItem;

	const itemCustom = document.createElement("div");
	itemCustom.classList.add("item__custom");

	const edit = document.createElement("img");
	edit.classList.add("item__edit");
	edit.setAttribute("src", "images/edit-black.svg");
	createEditEvent(edit);

	const trash = document.createElement("img");
	trash.classList.add("item__trash");
	trash.setAttribute("src", "images/trash-black.svg");
	createTrashEvent(trash);

	itemData.append(img);
	itemData.append(newText);
	itemCustom.append(edit);
	itemCustom.append(trash);
	mainInfo.append(itemData);
	mainInfo.append(itemCustom);

	return mainInfo;
}

function createDate() {
	const day = new Date().toLocaleString("pt-BR", { weekday: "long" });
	const date = new Date().toLocaleString("pt-BR", { DateStyle: "short" });
	const hour = new Date().toLocaleString("pt-BR", { timeStyle: "medium" });

	const p = document.createElement("p");
	p.classList.add("item__date");
	p.textContent = `${day} (${date}) ás ${hour}`;
	return p;
}

function createFullItem(textItem) {
	const buyList = document.querySelector(".buy-list__list");
	const newItem = createItem();
	const mainInfo = createMainInfo(textItem);
	const p = createDate();
	newItem.append(mainInfo);
	newItem.append(p);
	buyList.append(newItem);
	return newItem;
}

btn.addEventListener("click", () => {
	const newItem = createFullItem(input.value);
	console.log(newItem.firstElementChild.firstElementChild.firstElementChild)
	console.log(newItem.firstElementChild.firstElementChild.lastElementChild)
	const doneList = document.querySelector(".done-list__list");
	const buyList = document.querySelector(".buy-list__list");
});

{
	/* <li class="item">
	<div class="item__main-info">
		<div class="item__data">
			<img class="item__checkbox" src="images/checkbox.svg" alt="" />
			<p class="item__task item__task--done">Item 2</p>
		</div>
		<div class="item__custom">
			<img class="item__edit" src="images/edit-black.svg" alt="Editar" />
			<img class="item__cancel" src="images/trash-black.svg" alt="Lixeira" />
		</div>
	</div>
	<p class="item__date">
		
	</p>
</li>; */
}
