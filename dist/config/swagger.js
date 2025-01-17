"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import swagger 
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
// define swagger options 
const swaggerOptions = {
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
// serve swagger 
const setSwagger = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
};
// Export swagger endpoint
exports.default = setSwagger;
