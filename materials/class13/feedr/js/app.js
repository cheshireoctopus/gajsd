// API's:
// New York Times
// https://developer.nytimes.com/

// Guardian:
// http://open-platform.theguardian.com/explore/

// NewsApi.org
// https://newsapi.org/

// Handlebars templating:
var source = $('#article-template').html();
var template = Handlebars.compile(source);

// 1. Setup AJAX requests to fetch data from each news source
$.ajax({
	type: 
	url: 
	success:
})

// 2. Set up functions to handle each of the above AJAX requests:
// - Use Array's .map method to transform the response into an array of objects that you will pass to the Handlebars template
// - Check out the id=article-template in index.html to see what properties the template expects
// - To properly format article dates, use new Date() and the .toLocaleDateString() method
// Note: not all articles will have all the expected properties :D

