const buyList = document.querySelector(".buy-list__list");
const doneList = document.querySelector(".done-list__list");
const itens = document.getElementsByClassName("item");
const checksBox = document.getElementsByClassName("item__checkbox");
const cancels = document.getElementsByClassName("item__cancel");
const edits = document.getElementsByClassName("item__edit");

Array.from(checksBox).forEach((box) => {
	box.addEventListener("click", () => {
		if (box.getAttribute("src") === "images/checkbox.svg") {
			box.setAttribute("src", "images/checkbox-done.svg");
			doneList.append(box.parentElement.parentElement.parentElement);
			box.nextElementSibling.classList.add("item__task--done");
		} else {
			box.setAttribute("src", "images/checkbox.svg");
			buyList.append(box.parentElement.parentElement.parentElement);
			box.nextElementSibling.classList.remove("item__task--done");
		}
	});
});

Array.from(cancels).forEach((cancel) => {
	cancel.addEventListener("mouseenter", () => {
		cancel.setAttribute("src", "images/trash-red.svg");
	});
	cancel.addEventListener("mouseleave", () => {
		cancel.setAttribute("src", "images/trash-black.svg");
	});
	cancel.addEventListener("click", () => {
		console.log(cancel.parentElement.parentElement.parentElement)
        cancel.parentElement.parentElement.parentElement.remove();
	});
});

Array.from(edits).forEach((edit) => {
	edit.addEventListener("mouseenter", () => {
		edit.setAttribute("src", "images/edit-red.svg");
	});
	edit.addEventListener("mouseleave", () => {
		edit.setAttribute("src", "images/edit-black.svg");
	});
});