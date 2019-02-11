const startServer = require('./src/server')

startServer(3000);


/*const express = require("express");
const fs = require("fs");
const app = express();

const jsonParser = express.json();

const productRouter = express.Router();
productRouter.use("/", function(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  fs.createReadStream("src/db/products/products-mock.json").pipe(response);
});

app.use("/products", productRouter);
app.post("/signup", jsonParser, function(request, response) {
  let user = request.body;
  fs.writeFile(
    `src/db/users/${user.username}.json`,
    JSON.stringify(user),
    err => {
      
      let resp = { status: "success", user: user };
      response.json(JSON.stringify(resp));
    }
  );
});
app.use("/", function(request, response) {
  //ипользовал для проверки post
  debugger;
  response.sendFile(__dirname + "/index.html");
});
app.listen(3000); */


//http://localhost:3000/signup?username=qweqwe&telephone=123213&password=password&email=email