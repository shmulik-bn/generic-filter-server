const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getDataRoute = require("./routes/get-person-data.routes");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(getDataRoute);


const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server is up in port " + PORT);
});

