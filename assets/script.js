const Slider = {

	slides : [
		{
			image: "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			image: "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			image: "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			image: "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	],

	init () {
		



	},
}
const slides = [
	{
		image: "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0
console.log(document.querySelectorAll(".dot"));





document.getElementById("btn_left").addEventListener("click", function () {
	if (index > 0) {
		index = index - 1
		console.log(index);
	}
	else {
		index = slides.length - 1
	}

	moveSlide()
})



document.getElementById("btn_right").addEventListener("click", function () {
	if (index < slides.length - 1) {
		index = index + 1
		console.log(index);
	}
	else {
		index = 0
	}

	moveSlide()
})

function moveSlide() {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[index].image
	document.getElementById("tagLine").innerHTML = slides[index].tagLine

	for (let j = 0; j < slides.length; j++) {
		const element = document.querySelectorAll(".dot")[j];
		element.classList.remove('dot_selected')
	}

	document.querySelectorAll(".dot")[index].classList.add('dot_selected')
}

function addPagination() {

	let pagination = document.querySelector(".dots")
	for (let index = 0; index < slides.length; index++) {
		const element = slides[index];

		let button = document.createElement("button")
		button.classList.add("dot")
		pagination.appendChild(button)
	}
}

addPagination()

document.querySelectorAll(".dot")[0].classList.add("dot_selected")

const listeBaliseBtn = document.querySelectorAll(".dot")


for (let i = 0; i < listeBaliseBtn.length; i++) {
	const baliseBtn = listeBaliseBtn[i];
	baliseBtn.addEventListener("click", function () {
		index = i
		
		moveSlide()
	})
}


