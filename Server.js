const config = require("./configs/mainServer");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const ScrapRoutes = require("./router/ScrapRoutes");

console.log("port -- ", config);
const PORT = config.PORT;
const serverDate = new Date();
app.use("/scrap", ScrapRoutes);
app.get("/serverStatus", (req, res) => {
  res.status(200).send({ message: `Server running since ${serverDate}` });
});
app.use("*", (req, res) => {
  res.status(500).send({ message: `Invalid route` });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT} since ${serverDate}`);
});
