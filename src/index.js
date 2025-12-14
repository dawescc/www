const themes = ["pink", "red", "blue", "green"];



document.addEventListener("click", (e) => {
	const logo = e.target.closest('img[alt="Logo"]');
	if (!logo) return;

	const html = document.documentElement;
	const currentTheme = html.getAttribute("theme");
	const currentIndex = themes.indexOf(currentTheme);
	const nextIndex = (currentIndex + 1) % themes.length;
	const nextTheme = themes[nextIndex];

	html.setAttribute("theme", nextTheme);
	try {
		localStorage.setItem("theme", nextTheme);
	} catch (e) {
		// Ignore if storage is disabled
	}
});
