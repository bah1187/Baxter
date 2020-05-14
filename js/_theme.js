/* =========================================================================
global variables
========================================================================== */
//watchers for major breakpoint changes - move from small screen to large screen layout/styles
//these match up to
(function () {
    var mq = {
        end: window.matchMedia("(max-width: 799px)")
    }

    //container ID/class names called by specific functions
    var selectors = {
        searchForm: '.search-form',
        advancedSearchForm: '.advanced-search-form',
        pageWrap: '#page',
        socialShare: '.social-share',
        socialShareMore: '.share-more'
    }

/* =========================================================================
search form panel
========================================================================== */


$(function(){
  $('.search-button').click(function(){
   $('.search-toggle').slideToggle('fast');
   $('.search-button').toggleClass('open');
  });
});

/* =========================================================================
slideout filters for search results on small screens
========================================================================= */
if ($('#search-results').length == 1) window.APP.MODELS.FilterSlideOut.create({
    breakpoint: 800,
    animationSpeed: 200,
    pageWrapId: 'page',
    filterType: 'search',
    openToggle: 'Filters',
    closeToggle: 'Close'
});

/* =========================================================================
social share open/close toggle
========================================================================== */
$(selectors.socialShare)
    .on('click', selectors.socialShareMore, function () {
        var parent = $(this).parents(selectors.socialShare);
        parent.toggleClass('share-open');
        var moreText = $(this).attr('data-more-text');
        var lessText = $(this).attr('data-less-text');
        //on large screens, move the second list items into the first list, instead of sliding the list down
        if (parent.hasClass('share-open')) {
            $(this).text(lessText);
        }
        else {
            $(this).text(moreText);
        }
        return;
    });
})();

/* =========================================================================
Nav Toggles
========================================================================== */

$(function(){
  $('.js-nav-button').click(function(){
   $('.js-nav-toggle').slideToggle("fast");
  });
});


/* =========================================================================
Tabbed Job Lists
========================================================================== */
$(document).ready(function(){

	$('.tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
