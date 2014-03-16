function reactToWindowScroll() {
	var distanceScrolled = $(this).scrollTop();
	updateHeaderOpacity(distanceScrolled);
	updateHeaderTop(distanceScrolled);
  updateNavTop(distanceScrolled);
	updateLogoAppearance(distanceScrolled);
	updateNavItemBackgrounds(distanceScrolled);
}

function updateHeaderOpacity(distanceScrolled) {
	var header = $('#header');
	var headerFadeScrollDistance = 550;
	var headerOpacity = 1 - distanceScrolled/headerFadeScrollDistance;

	if (distanceScrolled < headerFadeScrollDistance) {
		header.css({opacity : headerOpacity});
	} else {
		header.css({opacity : 0});
	}
}

function updateHeaderTop(distanceScrolled) {
	var header = $('#header');
	var headerScrollSpeedFactor = 2;
	var headerOutOfViewDistance = 550;
	var headerTop =  distanceScrolled/headerScrollSpeedFactor;
	var headerFinalTop = headerOutOfViewDistance/headerScrollSpeedFactor;

	if (distanceScrolled < headerOutOfViewDistance) {
		header.css({top : headerTop});
	} else {
		header.css({top : headerFinalTop});
	}
}

function updateNavTop(distanceScrolled) {
	var nav = $('nav');
	var navMovementScrollDistance = 520;
	var navTopInital = 50;
	var navTopFinal = 80;
	var navShiftDistance = navTopFinal - navTopInital;
	var navTop = navTopInital + navShiftDistance*(distanceScrolled/navMovementScrollDistance);

	if (distanceScrolled < navMovementScrollDistance) {
		nav.css({top : navTop});
	} else {
		nav.css({top : navTopFinal});
	}
}

function updateLogoAppearance(distanceScrolled) {
	var logo = $('#logo');
	var logoAppearanceThreshold = 450;

	if (distanceScrolled < logoAppearanceThreshold) {
		logo.removeClass('show');
	} else {
		logo.addClass('show');
	}
}
