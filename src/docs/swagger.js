import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Task Management API", version: "1.0.0" }
  },
  apis: ["./src/modules/**/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
