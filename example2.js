var request = require('request');
var url = "http://www.example.com"


// console.log(htmlBody);
// request('http://www.google.com', function (error, response, body) {
//   if (error) {
//   throw error;
//   }
//   htmlBody = body;
// });


// this function prints the data
function printHTML (name) {
var htmlBody;
  request(name, function (error, response, body) {
  if (error) {
  console.log("Error Alert")
  throw error;
  }
  // console.log(body);
  console.log(response);
  htmlBody = body;
  });
  return htmlBody;
}

console.log(printHTML(url));