/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
 
$(function() {
	describe('RSS Feeds', function() {
		/*This test tests if the allFeeds object, containing the URL and the name of the blogs, is defined
	and not empty. */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This test tests loops through each feed and checks if the URL properties 
		in the all Feeds object are defined and not empty. */
		it('the URL property in each feed on the allFeeds object is defined and not empty', function() {
			for (var i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}
		});

		/* This test tests loops through each feed and checks if the name properties 
		in the all Feeds object are defined and not empty. */
		it('the name property in each feed on the allFeeds object is defined and not empty', function() {
			for (var i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}
		});
	});

	describe('The menu', function() {

		/* This test tests if, when the page loads, the side menu is hidden. It means, if the body tag
    	has the class "menu-hidden", responsible for hiding the menu. */
		it('element is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		});

		/* This test has two expectations: A) if the menu is hidden, does it show when the hamburger icon is clicked?
		B) if the menu is showing, does it hide when the hamburger icon is clicked? */
		it('changes visibility when the menu icon is clicked', function() {
			if($('body').hasClass('menu-hidden')) {
				$('.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBeFalsy();
				$('.menu-icon-link').trigger('click');
			} else {
				$('.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBeTruthy();
				$('.menu-icon-link').trigger('click');
			}
		});
	});

	describe('Initial Entries', function() {

		/* This test tests if there is at least one .entry element within the .feed container
    	when the loadFeed() function, which is asynchronous, is executed. */
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('returns at least a single .entry element', function() {
			expect($('.feed .entry').length >= 1).toBeTruthy();
		});
	});

	describe('New Feed Selection', function() {

		/* $initialTitle will have the value for the first loadFeed (loadFeed(0)). */
		var $initialTitle;

		/* This test tests if when the loadFeed() function loads a new feed, the content of the page changes. 
		
		1) The loadFeed(0) loads the feed from allFeeds(0). 
		2) In its callback function, the blog title is saved and another feed is loaded (in this case, loadFeed(1).
		3) The previous blog name is compared to the new one (after running loadFeed(1)).*/
	
		beforeEach(function(done) {
			loadFeed(0, function() {
				$initialTitle = $('.header-title').text();
				loadFeed(1, done)
			});
		});

		it('content changes when new feed is loaded', function() {
		/*This compares the previous blog title to the one that appears on the page when loadFeed(1) is executed.*/
			expect($('.header-title').text()).not.toBe($initialTitle);
		});
	});
}());
