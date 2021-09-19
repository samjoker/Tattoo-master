const navSlide = () => {
	const burger = document.querySelector('.burger-nav');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.6}s`;
			}
			console.log(index);
		});
		burger.classList.toggle('burger-cross');
	});
};

navSlide();
