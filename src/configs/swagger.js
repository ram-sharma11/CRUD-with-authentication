const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD Application with Authentication",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:4100`,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/swagger/*.js"],
};
module.exports = options;
