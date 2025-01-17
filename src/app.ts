// import the express application 
import express, {Express} from "express"

// importing  swagger
import setupSwagger from "../config/swagger";
import { timeStamp } from "console";

// initializing the express application
const app:  Express = express();

// API documentation for serup swagger
setupSwagger(app)

// GET equest response 
app.get("/", (req,res) => {
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

app.get("/tasks", (req,res)=>{
    res.send("Retriving task")
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

app.get("/api/v1/health", (req,res) =>{

    res.json({
        status:"OK",
        uptime: process.uptime(), 
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });

})



// Testing the server 
export default app;
