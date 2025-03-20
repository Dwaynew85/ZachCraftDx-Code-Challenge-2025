document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const menuIcon = document.getElementById('menu-icon');
	const backToTopBtn = document.getElementById('back-to-top');
	const navLinks = document.querySelectorAll('.navigation-list a');
	const body = document.body;

	function toggleMenu() {
		const isOpen = menu.classList.toggle('visible');
		menuIcon.src = isOpen ? "assets/xmark.svg" : "assets/bars.svg";
		menuIcon.alt = isOpen ? "Close Menu" : "Open Menu";
		body.style.overflow = isOpen ? 'hidden' : '';
	}

	function closeMenu() {
		if (menu.classList.contains('visible')) {
			menu.classList.remove('visible');
			menuIcon.src = "assets/bars.svg";
			menuIcon.alt = "Open Menu";
			body.style.overflow = '';
		}
	}

	menuBtn.addEventListener('click', function (event) {
		event.stopPropagation();
		toggleMenu();
	});

	document.addEventListener('click', function (event) {
		if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
			closeMenu();
		}
	});

	navLinks.forEach(link => {
		link.addEventListener('click', closeMenu);
	})

	window.addEventListener("scroll", function () {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollThreshold = (docHeight - winHeight) * 0.75;
		
		if (window.scrollY > scrollThreshold) {
			backToTopBtn.classList.add("show");
		} else {
			backToTopBtn.classList.remove("show");
		}
	});

	if (backToTopBtn) {
		backToTopBtn.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
	}
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});
