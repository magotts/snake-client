const net = require("net");
const connect = require("./client");


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  // your code here
  stdin.on('data', (key) => {
    process.stdout.write('\u0003');
    // \u0003 maps to ctrl+c input
    process.exit();
  });
};

console.log("Connecting ...");
connect();
setupInput();
handleUserInput();