var getHTML = require('../step5').getHTML,
    printHTML = require('../step5').printHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  html = html.split("").reverse().join("");
  console.log(html);
  /* Write your code here! */
}

getHTML(requestOptions, printReverse);