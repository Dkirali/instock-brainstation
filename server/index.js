const express = require("express");
const app = express();
const cors = require("cors");

//Routes
const warehouseRoute = require("./routes/warehouses");
const inventoryRoute = require("./routes/inventory");

//Config
require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
