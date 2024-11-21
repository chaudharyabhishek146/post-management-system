const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/postRoutes");

dotenv.config();

const app = express();
app.use(cors());
// app.use(express.json());
app.use("/api/v1", router);

mongoose
  .connect(process.env.MONGO_URI )
  .then(() => console.log("Mongo DB Connected "))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
