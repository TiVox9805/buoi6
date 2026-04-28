const express = require("express");
const app = express();

const studentRoutes = require("./routes/student.route");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");

app.use(express.json());
app.use(logger);

app.use("/api/students", studentRoutes);

app.use(errorHandler);

module.exports = app;