require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Settings

mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) =>
    console.log(
      `Connected to Mongo! Database name: "${db.connections[0].name}"`
    )
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.set("port", process.env.PORT1 || process.env.PORT2);

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
const router = require("./routes/index");
app.use('/', router);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
