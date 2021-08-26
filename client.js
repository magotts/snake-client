const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Player is connected.");
  });

  conn.on('connect', () => {
    conn.write('Name: YHL');
  });
  
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
  });
 
  let x = 1000;
  const moves = ["Move: up", "Move: up", "Move: up", "Move: up", "Move: right", "Move: down", "Move: right","Move: right", "Move: right"];

  for (const move of moves) {
    setTimeout(() => {
      conn.write(move);
    }, x);
    x += 1000;
  }
  


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;