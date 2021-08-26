const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Player is connected.");
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: YHL");
  });

  conn.on("connect", () => {
    conn.write("Say: im tired");
  });

  const snakeMoves = function() {
    let x = 1000;
    const moves = [
      "Move: up",
      "Move: up",
      "Move: up",
      "Move: up",
      "Move: right",
      "Move: down",
      "Move: right",
      "Move: right",
      "Move: right",
    ];
    for (const move of moves) {
      setTimeout(() => {
        conn.write(move);
      }, x);
      x += 1000;
    }
  };

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;