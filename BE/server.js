require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server Running on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });