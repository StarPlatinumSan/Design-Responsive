"use strict";

const flexDiv = document.querySelector(".flexDiv");
const gridDiv = document.querySelector(".gridDiv");
const unitsDiv = document.querySelector(".unitsDiv");
const transformDiv = document.querySelector(".transformDiv");

const containerFlex = document.querySelector(".containerFlex");
const flexSection = document.querySelector(".flexSection");

const flexItems = document.querySelectorAll(".flexItem");

const directionHidden = document.getElementById("directionHidden");
const directionReverse = document.getElementById("directionReverse");

const toggleContents = document.querySelectorAll(".hidden");

const switchButton = document.querySelectorAll('input[type="checkbox"]');
const justifyContentRadios = document.querySelectorAll('.justify-content-options input[type="radio"]');
const alignItemsRadios = document.querySelectorAll('.align-items-options input[type="radio"]');

const switchFlexDirection = document.getElementById("switchDirection");

const justifyContentDiv = document.getElementById("justifyContentDiv");
const alignItemsDiv = document.getElementById("alignItemsDiv");
const gapDiv = document.getElementById("gapDiv");

const btnFlexDirection = document.querySelector(".btnFlexDirection");
const btnDisplay = document.querySelector(".btnDisplay");
const gapInput = document.getElementById("gapInput");

const conclusionDiv = document.getElementById("conclusionDiv");

flexDiv.addEventListener("click", () => {
	window.location.href = "flex.html";
});
gridDiv.addEventListener("click", () => {
	window.location.href = "grid.html";
});
unitsDiv.addEventListener("click", () => {
	window.location.href = "units.html";
});
transformDiv.addEventListener("click", () => {
	window.location.href = "transform.html";
});

window.addEventListener("resize", function () {
	if (window.innerWidth < 700) {
		containerFlex.style.display = "none";
	} else {
		containerFlex.style.display = "block";
	}
});

function scrollToBottom() {
	window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function switchDisplay() {
	if (flexSection.style.display === "block") {
		flexSection.style.display = "flex";
		directionHidden.style.display = "flex";
		setTimeout(() => directionHidden.classList.add("show"), 10);
	} else {
		/* TODO HARD RESET */
		flexSection.style.display = "block";

		toggleContents.forEach((element) => {
			element.classList.remove("show");

			setTimeout(() => {
				if (!element.classList.contains("show")) {
					element.style.display = "none";
				}
			}, 500);
		});

		cleanUp();
	}
}

function cleanUp() {
	switchFlexDirection.style.backgroundColor = "inherit";

	flexSection.style.justifyContent = "flex-start";

	flexSection.style.flexDirection = "row";

	flexSection.style.alignItems = "flex-start";

	flexSection.style.height = "auto";

	justifyContentRadios.forEach((radio) => {
		radio.checked = radio.value === "flex-start";
	});

	alignItemsRadios.forEach((radio) => {
		radio.checked = radio.value === "flex-start";
	});

	switchButton.forEach((element) => {
		element.checked = false;
	});

	flexItems.forEach((element) => {
		element.style.width = "fit-content";
	});

	resetGap();
}

function switchDirection() {
	if (flexSection.style.flexDirection === "row" || flexSection.style.flexDirection === "") {
		flexSection.style.flexDirection = "column";

		directionReverse.style.display = "flex";
		setTimeout(() => directionReverse.classList.add("show"), 10);

		switchFlexDirection.style.backgroundColor = "#4a4a4a";
	} else {
		flexSection.style.flexDirection = "row";

		directionReverse.style.display = "flex";
		setTimeout(() => directionReverse.classList.add("show"), 10);

		switchFlexDirection.style.backgroundColor = "#4a4a4a";
	}
}

function updateJustifyContent(value) {
	const flexSection = document.querySelector(".flexSection");
	if (flexSection) {
		flexSection.style.justifyContent = value;
		justifyContentDiv.style.display = "flex";
		setTimeout(() => justifyContentDiv.classList.add("show"), 10);
	}

	scrollToBottom();
}

function showAlignItems() {
	alignItemsDiv.style.display = "flex";
	setTimeout(() => alignItemsDiv.classList.add("show"), 10);
}

function updateAlignItems(value) {
	const flexSection = document.querySelector(".flexSection");
	if (flexSection) {
		flexSection.style.alignItems = value;

		if (value === "stretch") {
			flexItems.forEach((element) => {
				element.style.width = "auto";
			});
		} else {
			flexItems.forEach((element) => {
				element.style.width = "fit-content";
			});
		}

		alignItemsDiv.style.display = "flex";
		setTimeout(() => alignItemsDiv.classList.add("show"), 10);
	}

	scrollToBottom();
}

function adjustGap(change) {
	const val = parseInt(gapInput.value) + change;
	if (val >= 0) {
		gapInput.value = val;
		flexSection.style.gap = `${val}px`;
	}
}

function resetGap() {
	gapInput.value = 0;
	flexSection.style.gap = "0px";
}
function gapSection() {
	gapDiv.style.display = "flex";
	setTimeout(() => gapDiv.classList.add("show"), 10);
	scrollToBottom();

	cleanUp();

	flexSection.style.flexDirection = "column";
	btnFlexDirection.checked = true;
	btnDisplay.checked = true;
	flexSection.style.height = "1000px";
}

function moreInfo() {
	alignSelfDiv.style.display = "flex";
	setTimeout(() => alignSelfDiv.classList.add("show"), 10);
	scrollToBottom();
}

function conclusion() {
	conclusionDiv.style.display = "flex";
	setTimeout(() => conclusionDiv.classList.add("show"), 10);
	scrollToBottom();
}

function goBack() {
	window.location.href = "index.html";
}
