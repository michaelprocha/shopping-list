import createFullItem from "./create.js";

function loadBuyTasks() {
	if (localStorage.getItem("buyData") === null) {
	} else {
		const buyItens = JSON.parse(localStorage.getItem("buyData"));
		buyItens.forEach((item) => {
			createFullItem(item.text, item.date, item.done);
		});
	}
}

function loadDoneTasks() {
	if (localStorage.getItem("doneData") === null) {
	} else {
		const doneItens = JSON.parse(localStorage.getItem("doneData"));
		doneItens.forEach((item) => {
			createFullItem(item.text, item.date, item.done);
		});
	}
}

export default function load() {
	loadBuyTasks();
	loadDoneTasks();
}
