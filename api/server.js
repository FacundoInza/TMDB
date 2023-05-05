const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const config = require("./config");
const db = require("./db");
const User = require("./models/User");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", routes);

const PORT = config.PORT;

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
  });
});
