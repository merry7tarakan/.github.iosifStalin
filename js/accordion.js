window.addEventListener("DOMContentLoaded", function () {
	"use strict";

	const accordion = () => {
		const btns = document.querySelectorAll(".accordion-head");
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				this.classList.toggle("active-style");
				this.nextElementSibling.classList.toggle("active-content");
				if (this.classList.contains("active-style")) {
					this.nextElementSibling.style.maxHeight =
						this.nextElementSibling.scrollHeight + 50 + "px";
				} else {
					this.nextElementSibling.style.maxHeight = "0px";
				}
			});
		});
	};
	accordion();

})