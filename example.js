var http = require("http");

var google = {
  host: "www.google.com",
  path: "/"
};


function getHTML (url, callback) {
    var body;
    http.get(url, (response) => {

        response.setEncoding("utf8");

        response.on("data", (data) => {
        body += data;
        });

        response.on("end", () => {
            console.log("Response stream complete.");
            callback(body, ' !!!!!!');
        });
        response.on("finish", () => {
            console.log("Stream finished.");
        });
    });

}


function addExclamation(original, append){
    console.log(original + append);
}

getHTML(google, addExclamation);

console.log("hi");
console.log("bye");