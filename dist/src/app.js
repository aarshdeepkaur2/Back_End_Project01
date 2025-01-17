"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the express application 
const express_1 = __importDefault(require("express"));
// importing  swagger
const swagger_1 = __importDefault(require("../config/swagger"));
// initializing the express application
const app = (0, express_1.default)();
// API documentation for serup swagger
(0, swagger_1.default)(app);
// GET equest response 
app.get("/", (req, res) => {
    res.send("Initialize Project");
});
// example "tasks endpoint"
/**
  * @openapi
  * /tasks:
  *  get:
  *      summary: Retrieve a list of tasks
  *      tags: [Tasks]
  *      responses:
  *          200:
  *              description: A list of tasks
*/
app.get("/tasks", (req, res) => {
    res.send("Retriving task");
});
// example "tasks endpoint"
/**
  * @openapi
  * /api/v1/health:
  *  get:
  *      summary: Get health status of the API
  *      tags: [Health]
  *      responses:
  *          200:
  *              description: end JSON respone with status, server update, current timestamp and API version
*/
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
});
// Testing the server 
exports.default = app;
