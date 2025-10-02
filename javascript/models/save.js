class ObjTask {
	constructor(setText, setDate, setDone) {
		this.text = setText;
		this.date = setDate;
		this.done = setDone;
	}
}

function getBuyItens() {
	const textTasks = Array.from(document.querySelectorAll(".buy-list__list .item__task"));
	const dates = Array.from(document.querySelectorAll(".buy-list__list .item__date"));
	const buyItens = [];
	dates.forEach((date, iDate) => {
		if (textTasks[iDate].textContent) {
			buyItens.push(new ObjTask(textTasks[iDate].textContent, date.textContent, false));
		} else {
			buyItens.push(new ObjTask(textTasks[iDate].value, date.textContent, false));
		}
	});
	return buyItens;
}

function getDoneItens() {
	const textTasks = Array.from(document.querySelectorAll(".done-list__list .item__task"));
	const dates = Array.from(document.querySelectorAll(".done-list__list .item__date"));
	const doneItens = [];
	dates.forEach((date, iDate) => {
		if (textTasks[iDate].textContent) {
			doneItens.push(new ObjTask(textTasks[iDate].textContent, date.textContent, true));
		} else {
			doneItens.push(new ObjTask(textTasks[iDate].value, date.textContent, true));
		}
	});
	return doneItens;
}

export function saveTask() {
    const array = getBuyItens();
	const saveJson = JSON.stringify(array);
	localStorage.setItem("buyData", saveJson);
}

export function saveTaskDone() {
    const array = getDoneItens();
	const saveJson = JSON.stringify(array);
	localStorage.setItem("doneData", saveJson);
}