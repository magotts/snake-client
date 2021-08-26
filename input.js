//const setupInput = require("./setupInput");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    process.stdout.write('\u0003');
    // \u0003 maps to ctrl+c input
    process.exit();
  });
};


module.exports = setupInput;