require("express-async-errors");
require("dotenv").config();

const express = require("express");
const errorHandlerMiddleware = require("./middleware/errorhanlder");
const notFound = require("./middleware/notFound");
const app = express();

app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1><a href="/send">Send email</a>');
});

// app.get('/send',)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start = () => {
  try {
    app.listen(port, () => console.log(`server listening on ${port}`));
  } catch (error) {}
};

start();
