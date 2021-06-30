const express = require("express");
const router = express.Router();
const warehouses = require("../data/warehouses.json");

const getWarehouse = (id) => {
    const foundWarehouse = warehouses.find((warehouse) => {
        return id === warehouse.id;
    });
    return foundWarehouse;
};

router.get("/:id", (req, res) => {
    let { id } = req.params;
    const warehouseFound = getWarehouse(id);
    res.status(200).json(warehouseFound);
});

module.exports = router;
