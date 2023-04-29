const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const scoreRoute = require("./routes/scores");

app.use(cors());
dotenv.config();
app.use(express.json());

let port = process.env.PORT;

// DATABASE CONNECTION
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

app.use("/auth", authRoute);
app.use("/scores", scoreRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
