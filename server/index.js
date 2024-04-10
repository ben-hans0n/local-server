// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

let latestData = {
    isAuthenticated: "false"
};

app.post('/api/data', (req,res) => {
    latestData = req.body;
    console.log('data updated: ', latestData);
    res.status(200).send('data received');
});

app.get('/api/data', (req, res) => {
    res.json(latestData);
});

app.get("/api", (req, res) => {
  res.json({ message: "wassup dog" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});