const http = require("http");
const router = require("./routes/router");
const fs = require('fs');


var options = {
  key: fs.readFileSync('./src/keys/privatekey.ppk'),
  cert: fs.readFileSync('./src/keys/certificate')
};




const startServer = port => {
  const server = http.createServer((request, response) => {

    const func = router(request);
    func(request, response);
  });

  server.listen(port);
};

module.exports = startServer;
