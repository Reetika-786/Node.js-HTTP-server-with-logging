const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

//creating web server using http module, and creating a log file
// whenever a new request is received, it will log the time of the request in log.txt

const myServer = http.createServer((req, res)=>{
    // console.log(req.headers);

    const log = `${Date.now()}: ${req.url} New req received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case '/': res.end("homepage");
            break
            case '/about':res.end("i am reetika");
            break
            default:
                res.end("404 not found");
        }

        console.log("new req recieved");
        // res.end("hello from server")
    })
});

myServer.listen(8000, ()=>{
    console.log("server is listening on port 8000");
});

