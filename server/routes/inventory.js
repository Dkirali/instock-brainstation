const express = require("express");
const router = express.Router();
const fs = require("fs");
const inventory = require("../data/inventories.json");

const getItem = (id) => {
    const foundItem = inventory.find((item) => {
        return id === item.id;
    });
    return foundItem;
};

router.get("/", (req, res) => {
    res.status(200).json(inventory);
});

router.get("/:id", (req, res) => {
    let { id } = req.params;
    const itemFound = getItem(id);
    res.status(200).json(itemFound);
});

module.exports = router;
