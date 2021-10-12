const express = require("express");
const indexRouter = require("./routes/index");

const app = express();
app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", indexRouter);
app.post("/", indexRouter);

const port = 5000;
app.listen(port, (req, res) => console.log("connected to port ", port));
