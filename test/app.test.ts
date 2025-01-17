// Import supertest 
import request from "supertest"

import { Response } from "supertest"

import app from "../src/app"
describe("GET /", () => {
    it("should return Initialize Project", async () => {
        // create GET request to root endpoint
        const response: Response = await request(app).get("/");

        // assert that response status is OK, rsponse text is "Hello, world!"
        expect(response.status).toBe(200);
        
        expect(response.text).toBe("Initialize Project");
    });
});

describe("GET/api/v1/health", ()=> {
     it("should return the health of the API", async() =>{
         const response: Response =await request(app).get("/api/v1/health");

         //asset response status to be ok
         expect(response.status).toBe(200);
         expect(response.body.status).toBe("OK");
         expect(response.body).toHaveProperty("uptime");
         expect(response.body).toHaveProperty("timestamp");
         expect(response.body).toHaveProperty("version");


     })
    });







