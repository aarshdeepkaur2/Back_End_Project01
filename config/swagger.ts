// import swagger 
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import {Express} from "express"


// define swagger options 
const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documention",
            version: "1.0.0"
        },

    },
    // path to files
    apis: ["./src/app.ts"]
};

// Intialize Swagger JSDoc 
const swaggerDocs: any = swaggerJsDoc(swaggerOptions);

// serve swagger 
const setSwagger = (app: Express): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

// Export swagger endpoint
export default setSwagger;