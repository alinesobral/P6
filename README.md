To run the application, click on index.html.

At the bottom of the page, it is possible to see the tests and if they pass. 

If they pass, you're going to see a green bar. 

In case they fail, you'll see a red bar, specifying which test did not pass.

The tests are:

1) The allFeeds variable is defined and not empty;
2) The url and name properties of the allFeeds variable are defined and not empty;
3) When the page loads, the menu is hidden. In this case, the "menu-hidden" class exists.
4) The visibility of the menu changes when the hamburger icon is clicked. 
5) Considering that the loadFeed() function is asynchronous:
	a) There must be at least a single .entry element within the .feed container when the page is loaded;
	b) When a new feed is loaded, the content of the page must change. 
