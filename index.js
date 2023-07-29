const fs = require("fs");
const http = require("http");
const { json } = require("stream/consumers");
const url = require("url");
const readhtml = fs.readFileSync(
  "C:/Users/AKHIL 220830/Downloads/weather/index.html",
  "utf-8"
);
const data = fs.readFileSync(
  "C:/Users/AKHIL 220830/Downloads/weather/data.json",
  "utf-8"
);
const dataObj = JSON.parse(data);
const temp = fs.readFileSync(
  "C:/Users/AKHIL 220830/Downloads/weather/template.html",
  "utf-8"
);
const replaceHolders = function (data_html, ogfile) {
  let output = data_html.replace(/{%COUNTRY%}/g, ogfile.Country);
  output = output.replace(/%TEMPERATUREC%/g, ogfile.temperatureC);
  output = output.replace(/{%TEMPERATUREF%}/g, ogfile.temperatureF);
  output = output.replace(/{%SUMMARY%}/g, ogfile.summary);
  output = output.replace(/{%DATE%}/g, ogfile.date);
  return output;
};
const server = http.createServer((req, res) => {
  console.log(req.url);
  //   const { query, pathName } = url.parse(req.url, true);
  //   console.log(query);
  //   console.log(pathName);
  let pathName = req.url;
  pathName = pathName.toLowerCase().trim();
  console.log(pathName);
  if (pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(readhtml);
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(dataObj);
  } //else if (pathName === "/country") {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   let countryoutput = dataObj
  //     .map(function (el) {
  //       replaceHolders(temp, el);
  //     })
  //     .join("");

  //   res.end(countryoutput);
  // }
  else if (pathName === "/unitedstatesofamerica") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj.find(function (el) {
      console.log("I am checked");
      return el.Country === "United states of America";
    });
    console.log(product);
    if (product) {
      const prodhtml = replaceHolders(temp, product);
      res.end(prodhtml);
    } else {
      res.end("US not there");
    }
    //res.end("Checking");
  } else if (pathName === "/unitedkingdom") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj.find(function (el) {
      console.log("I am checked");
      return el.Country === "United Kingdom";
    });
    console.log(product);
    if (product) {
      const prodhtml = replaceHolders(temp, product);
      res.end(prodhtml);
    } else {
      res.end("UK not there");
    }
  } else if (pathName === "/canada") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj.find(function (el) {
      console.log("I am checked");
      return el.Country === "Canada";
    });
    console.log(product);
    if (product) {
      const prodhtml = replaceHolders(temp, product);
      res.end(prodhtml);
    } else {
      res.end("Canada not there");
    }
  } else if (pathName === "/germany") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj.find(function (el) {
      console.log("I am checked");
      return el.Country === "Germany";
    });
    console.log(product);
    if (product) {
      const prodhtml = replaceHolders(temp, product);
      res.end(prodhtml);
    } else {
      res.end("Germany not there");
    }
  } else if (pathName === "/russia") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj.find(function (el) {
      console.log("I am checked");
      return el.Country === "Russia";
    });
    console.log(product);
    if (product) {
      const prodhtml = replaceHolders(temp, product);
      res.end(prodhtml);
    } else {
      res.end("Russia not there");
    }
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1> Page Not Found </h1>");
  }
});

server.listen(8080, "127.0.0.1", function () {
  console.log("Listeneing on port 8080");
});
