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







