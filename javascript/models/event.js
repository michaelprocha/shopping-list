import * as save from "./save.js";
import verifyItem from "./verify.js";

export function createCheckboxEvent(checkbox) {
	checkbox.addEventListener("click", () => {
		if (checkbox.getAttribute("src") === "../../images/checkbox.svg") {
			checkbox.setAttribute("src", "../../images/checkbox-done.svg");
			checkbox.nextElementSibling.classList.add("item__task--done");
			const doneList = document.querySelector(".done-list__list");
			doneList.append(checkbox.parentElement.parentElement.parentElement);
			save.saveTask();
			save.saveTaskDone();
		} else {
			checkbox.setAttribute("src", "../../images/checkbox.svg");
			checkbox.nextElementSibling.classList.remove("item__task--done");
			const buyList = document.querySelector(".buy-list__list");
			buyList.append(checkbox.parentElement.parentElement.parentElement);
			save.saveTask();
			save.saveTaskDone();
		}
	});
}

export function createEditEvent(edit) {
	edit.addEventListener("mouseenter", () => {
		edit.setAttribute("src", "../../images/edit-red.svg");
	});
	edit.addEventListener("mouseleave", () => {
		edit.setAttribute("src", "../../images/edit-black.svg");
	});
	edit.addEventListener("click", () => {
		if (edit.parentElement.previousElementSibling.lastElementChild.getAttribute("type")) {
			if (edit.parentElement.previousElementSibling.firstElementChild.getAttribute("src") === "../../images/checkbox-done.svg") {
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
			save.saveTask();
			save.saveTaskDone();
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

export function createTrashEvent(trash) {
	trash.addEventListener("mouseenter", () => {
		trash.setAttribute("src", "../../images/trash-red.svg");
	});
	trash.addEventListener("mouseleave", () => {
		trash.setAttribute("src", "../../images/trash-black.svg");
	});
	trash.addEventListener("click", () => {
		trash.parentElement.parentElement.parentElement.remove();
		save.saveTask();
		save.saveTaskDone();
        verifyItem();
	});
}