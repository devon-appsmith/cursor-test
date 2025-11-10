// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		const isOpen = navMenu.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
	navMenu.querySelectorAll('a').forEach(a => {
		a.addEventListener('click', () => {
			navMenu.classList.remove('open');
			navToggle.setAttribute('aria-expanded', 'false');
		});
	});
}

// Year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', e => {
		const id = link.getAttribute('href');
		if (!id || id.length < 2) return;
		const target = document.querySelector(id);
		if (!target) return;
		e.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});


