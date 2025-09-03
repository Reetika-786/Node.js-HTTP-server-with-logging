# Node.js HTTP Server (Without Express)

A simple Node.js server using only core modules (`http`, `fs`) to show how routing worked **before Express**.

## Features
- Serves basic routes:
  - `/` → homepage
  - `/about` → i am reetika
  - any other → 404 not found
- Logs every request with timestamp in `log.txt`


## Run
```bash
node index.js


Then open in browser:

http://localhost:8000/
http://localhost:8000/about


How It Works (Pre-Express)

const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") res.end("homepage");
  else if (req.url === "/about") res.end("i am reetika");
  else res.end("404 not found");
}).listen(8000);


This is how routing was done manually before frameworks like Express simplified it.