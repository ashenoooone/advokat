require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("uploads"));
app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.json());
app.use("/api", router);
// замыкающий т.к. на нем прекращается работа. из-за невызванного next
app.use(errorHandler);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const token = await bcrypt.hash("hellotoallmyfriends", 10);
    console.log(token);
    app.listen(PORT, () => console.log("Server started on " + PORT + " port"));
  } catch (error) {
    console.log(error);
  }
};

start();
