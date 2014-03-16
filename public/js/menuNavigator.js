function bindNavItemClickToArticleScroll(navItem) {
	navItem.on('click', function() {
		articleName = '#' + navItem.attr('id') + '-article';
		scrollToArticle(articleName);
	});
}

function scrollToArticle(articleName) {
	var articleTopOffset = 170;
	var scrollToArticleTime = 200;

	articleTop = $(articleName).offset().top - articleTopOffset;
	$('html,body').animate({scrollTop : articleTop}, scrollToArticleTime);
}

function updateNavItemBackgrounds(distanceScrolled) {
	var articleThresholds = [];
	var backgroundSwitchOffset = 330;

	$('.content-article').each(function() {
		articleThresholds.push($(this).offset().top - backgroundSwitchOffset);
	});

	for (var i = 0; i < articleThresholds.length; i++) {
		if (distanceScrolled < articleThresholds[i]) {
			$('nav li').removeClass('selected');
			$('nav li:nth-child(' + i + ')').addClass('selected');
			break;
		} else {
			$('nav li').removeClass('selected');
			$('nav li:last-child').addClass('selected');
		}
	};
}
