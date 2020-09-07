const express = require("express");
const cors = require("cors")
const app = express();


module.exports = app;

// settings
app.set("port", process.env.PORT || 4000);

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", require("./routes/notes"));
