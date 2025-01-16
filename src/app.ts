// import the express application a
import express, {Express} from "express"

// initializing the express application
const app:  Express = express();

// GET equest response 
app.get("/", (req,res) => {
    res.send("Initialize Project");

});

// Testing the server 
export default app;