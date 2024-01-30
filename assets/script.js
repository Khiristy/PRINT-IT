
(function () {

    window.addEventListener('load', () => {

		Slider.init()
	
	})

	const Slider = {

		slides: [
			{
				image: "slide1.jpg",
				tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
			},

			{
				image: "slide2.jpg",
				tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
			},

			{
				image: "slide3.jpg",
				tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
			},

			{
				image: "slide4.png",
				tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
			}
		],
	
		index: 0,
	
		init() {
	
			this.arrowLeft = document.getElementById("arrowLeft");
			this.arrowRight = document.getElementById("arrowRight");
			this.bannerImg = document.getElementById("bannerImg");
			this.tagLine = document.getElementById("tagLine");
			this.paginationDots = document.getElementById("paginationDots");
	
			this.addPagination()
			this.listePaginationBtn = document.querySelectorAll(".dot");
			this.events()
			this.listePaginationBtn[0].classList.add("dot_selected");
		},
	
		events() {
	
			this.arrowLeft.addEventListener("click", () => {
				if (this.index > 0) {
					this.index = this.index - 1
					console.log(this.index);
				}
				else {
					this.index = this.slides.length - 1
				}
	
				this.moveSlide()
			})
	
			this.arrowRight.addEventListener("click", () => {
				if (this.index < this.slides.length - 1) {
					this.index = this.index + 1
					console.log(this.index);
				}
				else {
	
					this.index = 0
				}
	
				this.moveSlide()
			})
	
			for (let i = 0; i < this.listePaginationBtn.length; i++) {
				const paginationBtn = this.listePaginationBtn[i];
				paginationBtn.addEventListener("click", () => {
	
					this.index = i
	
					this.moveSlide()
				})
			}
	
		},
	
		moveSlide() {
	
			this.bannerImg.src = "./assets/images/slideshow/" + this.slides[this.index].image
			this.tagLine.innerHTML = this.slides[this.index].tagLine
	
			for (let j = 0; j < this.slides.length; j++) {
				const element = this.listePaginationBtn[j];
				element.classList.remove('dot_selected')
			}
	
			this.listePaginationBtn[this.index].classList.add('dot_selected')
		},
	
		addPagination() {
	
			for (let i = 0; i < this.slides.length; i++) {
				const element = this.slides[i];
	
				const button = document.createElement("button")
				button.classList.add("dot")
				this.paginationDots.appendChild(button)
			}
		},
	}
})();


  














