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

router.delete("/:id/item", (req, res) => {
    let { id } = req.params;
    const itemFound = getItem(id);
    selectedIndex = inventory.indexOf(itemFound);
    inventory.splice(selectedIndex, 1);
    res.json(inventory)
    const newObject = JSON.stringify(inventory, null, 2)
    fs.writeFileSync("../server/data/inventories.json", newObject, (err) => {
        console.log("write success!")
        if (err) {
            res.status(403).json("error, not found");
        }
    })
})

module.exports = router;
