// import the express application 
import express, {Express} from "express"

// importing  swagger
import setupSwagger from "../config/swagger";

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

// Testing the server 
export default app;
