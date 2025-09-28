// const buyList = document.querySelector(".buy-list__list");
// const doneList = document.querySelector(".done-list__list");
const input = document.querySelector(".add-list__input");
const btn = document.querySelector(".add-list__btn");

class ObjTask {
	constructor(setText, setDate, setDone) {
		this.text = setText;
		this.date = setDate;
		this.done = setDone;
	}
}

function loadBuyTasks() {
	if (localStorage.getItem("buyData") === null) {
		console.log("sem dados");
	} else {
		const buyItens = JSON.parse(localStorage.getItem("buyData"));
		buyItens.forEach((item) => {
			createFullItem(item.text, item.date, item.done);
		});
	}
}

function saveTask(array) {
	saveJson = JSON.stringify(array);
	localStorage.setItem("buyData", saveJson);
}

function saveTaskDone(array) {}

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

function createMainInfo(textItem, done) {
	const mainInfo = document.createElement("div");
	mainInfo.classList.add("item__main-info");

	const itemData = document.createElement("div");
	itemData.classList.add("item__data");

	const img = document.createElement("img");
	img.classList.add("item__checkbox");
	if (done === false) {
		img.setAttribute("src", "images/checkbox.svg");
	} else {
		img.setAttribute("src", "images/checkbox-done.svg");
	}
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

function createDate(date) {
	const p = document.createElement("p");
	p.classList.add("item__date");
	p.textContent = date;
	return p;
}

function createFullItem(textItem, date, done) {
	const buyList = document.querySelector(".buy-list__list");
	const doneList = document.querySelector(".done-list__list");
	const newItem = createItem();
	const mainInfo = createMainInfo(textItem, done);
	const p = createDate(date);
	newItem.append(mainInfo);
	newItem.append(p);
	if (done === false) {
		buyList.append(newItem);
	} else {
		doneList.append(newItem);
	}
}

btn.addEventListener("click", () => {
	if (input.value !== "") {
		const day = new Date().toLocaleString("pt-BR", { weekday: "long" });
		const date = new Date().toLocaleString("pt-BR", { DateStyle: "short" });
		const hour = new Date().toLocaleString("pt-BR", { timeStyle: "medium" });
		const fullDate = `${day} (${date}) ás ${hour}`;
		createFullItem(input.value, fullDate, false);

		const textTasks = Array.from(document.querySelectorAll(".buy-list__list .item__task"));
		const dates = Array.from(document.querySelectorAll(".buy-list__list .item__date"));
		const buyItens = [];
		dates.forEach((date, iDate) => {
			buyItens.push(new ObjTask(textTasks[iDate].textContent, date.textContent, false));
		});
		saveTask(buyItens);
		input.value = "";
	}
});

loadBuyTasks();
