// Stores the active TCP connection object.
let connection;
//connection = conn;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  stdin.on("data", (data) => {
    if (data === "w") {
      conn.write("Move: up");
    } else if (data === "s") {
      conn.write("Move: down");
    } else if (data === "d") {
      conn.write("Move: right");
    } else if (data === "a") {
      conn.write("Move: left");
    }
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};


module.exports = { setupInput };
