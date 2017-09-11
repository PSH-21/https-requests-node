var getHTML = require('./step5').getHTML,
    printHTML = require('./step5').printHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);
