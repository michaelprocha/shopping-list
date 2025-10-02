import createFullItem from "./create.js";

function loadBuyTasks() {
	if (localStorage.getItem("buyData") === null) {
        const buyItens = [];
		return buyItens;
	}
	const buyItens = JSON.parse(localStorage.getItem("buyData"));
	buyItens.forEach((item) => {
		createFullItem(item.text, item.date, item.done);
	});
	return buyItens;
}

function loadDoneTasks() {
	if (localStorage.getItem("doneData") === null) {
        const doneItens = [];
		return doneItens;
	}
	const doneItens = JSON.parse(localStorage.getItem("doneData"));
	doneItens.forEach((item) => {
		createFullItem(item.text, item.date, item.done);
	});
	return doneItens;
}

export default function load() {
	const hasLoadBuy = loadBuyTasks();
	const hasLoadDone = loadDoneTasks();
	if (hasLoadBuy.length || hasLoadDone.length) {
		return true;
	}
	return false;
}
