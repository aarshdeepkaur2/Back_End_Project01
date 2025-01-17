import app from "./app";

// Importing server
import {Server} from "http";

// initialize 
const PORT: string | 3000 = process.env.PORT || 3000;

// Initialize the server 
const server: Server =app.listen(PORT, ()=> {
     console.log(`server is running on the port ${PORT}`)

});

// export Server 
export default server;
