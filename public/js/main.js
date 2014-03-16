$(document).ready(function() {
	// whenever the window scrolls fire the reactToWindowScroll function
	$(window).scroll(reactToWindowScroll);
	// iterate over each nav item
	$('nav ul li').each(function() {
		bindNavItemClickToArticleScroll($(this));
	});
});
