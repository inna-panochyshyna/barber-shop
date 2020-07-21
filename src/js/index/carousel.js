export function carouselNavigate() {
let slideIndex = 1;
const carousel = document.getElementById("carousel");
const slides = document.getElementsByClassName("carousel-slide");
const lines = document.getElementsByClassName("carousel-navigate__line");

function showSlides(n) {
	let i;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < lines.length; i++) {
		lines[i].className = lines[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	lines[slideIndex - 1].className += " active";
}

carousel.addEventListener("click", (event) => {
	const targetId = event.target.id;
	switch (targetId) {
		case "carousel-prev":
			showSlides(--slideIndex);
		break;
		case "carousel-next":
			showSlides(++slideIndex);
		break;
		default:
			if (targetId.match(/carousel-navigate/)) {
				slideIndex = targetId.substr("carousel-navigate".length);
				showSlides(slideIndex);
			}
		break;
	}
});

showSlides(slideIndex);
const carouselNavigateAuto = setInterval(() => showSlides(++slideIndex), 10000);
window.addEventListener("unload", () => clearTimeout(carouselNavigateAuto));
}