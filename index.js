require("dotenv").config();
const cors = require("cors");
const express = require('express');
const app = express();
const port = process.env.PORT;
const dynosaursRoute = require("./routes/dynosaurs");

require('./models/index');

app.use(express.json());
app.use(cors());
app.use("/dynosaurs", dynosaursRoute);

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
});