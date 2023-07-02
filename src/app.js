const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

require("./configs/db");
const app = express();

// Use parsing middleware
app.use(express.json());

const swaggerOptions = require("./configs/swagger");
// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//   router
app.use("/", require("./routes/index"));

module.exports = app;
