"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const models_1 = require("./models");
const server = http.createServer(app_1.default);
const port = normalizePort(process.env.port || 3000);
models_1.default.sequelize.sync().then(() => {
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
});
function normalizePort(val) {
    let port = typeof val === "string" ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== "listen")
        throw error;
    let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
}
