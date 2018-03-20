// Make GET request to https://sytantris.github.io/http-examples/future.jpg
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

var request = require("request");
var fs = require("fs");

request.get("https://sytantris.github.io/http-examples/future.jpg")
       .on("error", function (err){
        throw err;
       })
       .on("response", function (response){
        console.log("Response message status:", response.statusCode);
       })
       .pipe(fs.createWriteStream("./http_requests.jpg"));