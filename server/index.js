const express = require("express");
const app = express();
const cors = require("cors");
const warehousesJson = require('./data/warehouses.json')

//Routes
const warehouseRoute = require("./routes/warehouses");
const inventoryRoute = require("./routes/inventory");

//Config
require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.status(200).json(warehousesJson)
})

app.use('/api', warehouseRoute)

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
