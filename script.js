const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
	navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
	if (event.target.closest('a')) {
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.setAttribute('aria-label', 'Open menu');
		navigation.classList.remove('is-open');
	}
});

document.querySelectorAll('.filter-btn').forEach((button) => {
	button.addEventListener('click', () => {
		const filter = button.dataset.filter;
		document.querySelectorAll('.filter-btn').forEach((item) => {
			item.setAttribute('aria-pressed', String(item === button));
		});
		document.querySelectorAll('.project').forEach((project) => {
			project.hidden = filter !== 'all' && project.dataset.category !== filter;
		});
	});
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));