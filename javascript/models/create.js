import * as event from "./event.js";

function createDate(date) {
	const p = document.createElement("p");
	p.classList.add("item__date");
	p.textContent = date;
	return p;
}

function createMainInfo(textItem, done) {
	const mainInfo = document.createElement("div");
	mainInfo.classList.add("item__main-info");

	const itemData = document.createElement("div");
	itemData.classList.add("item__data");

	const img = document.createElement("img");
	img.classList.add("item__checkbox");

	const newText = document.createElement("p");
	newText.classList.add("item__task");
	newText.textContent = textItem;

	if (done === false) {
		img.setAttribute("src", "images/checkbox.svg");
	} else {
		img.setAttribute("src", "images/checkbox-done.svg");
		newText.classList.add("item__task--done");
	}
	event.createCheckboxEvent(img);

	const itemCustom = document.createElement("div");
	itemCustom.classList.add("item__custom");

	const edit = document.createElement("img");
	edit.classList.add("item__edit");
	edit.setAttribute("src", "images/edit-black.svg");
	event.createEditEvent(edit);

	const trash = document.createElement("img");
	trash.classList.add("item__trash");
	trash.setAttribute("src", "images/trash-black.svg");
	event.createTrashEvent(trash);

	itemData.append(img);
	itemData.append(newText);
	itemCustom.append(edit);
	itemCustom.append(trash);
	mainInfo.append(itemData);
	mainInfo.append(itemCustom);

	return mainInfo;
}

function createItem() {
	const newItem = document.createElement("li");
	newItem.classList.add("item");
	return newItem;
}

export default function createFullItem(textItem, date, done) {
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