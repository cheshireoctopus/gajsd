// Coinbase BTC URL: https://api.coinbase.com/v2/prices/BTC-USD/buy

// Create instance of XMLHTTPRequest
var httpRequest = new XMLHttpRequest();

// Set a custom function to handle the response
httpRequest.onreadystatechange = responseMethod;

httpRequest.open('GET', 'https://api.coinbase.com/v2/prices/BTC-USD/buy');

httpRequest.send();

function responseMethod() {

  // Check if our state is "DONE"
  if (httpRequest.readyState === XMLHttpRequest.DONE) {

    // If our request was successful we get a return code/status of 200
    if (httpRequest.status === 200) {

      // Handle a successful request
      console.log(httpRequest);

    } else {

      // Error handling for when a request fails
      console.log('There was a problem with the request.');

    }
  }
}
