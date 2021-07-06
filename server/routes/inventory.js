const express = require("express");
const router = express.Router();
const fs = require("fs");
const inventory = require("../data/inventories.json");

// Helper function to find inventory item by ID
const getItem = (id) => {
  const foundItem = inventory.find((item) => {
    return id === item.id;
  });
  return foundItem;
};

// Route to get list of all inventory items
router.get("/", (req, res) => {
  res.status(200).json(inventory);
});

// Route to get a single item and details by ID
router.get("/:id", (req, res) => {
  let { id } = req.params;
  const itemFound = getItem(id);
  res.status(200).json(itemFound);
});

//Modifiy an existing item
router.put('/edit/:id', (req, res ) => {
  const data = req.body;
  console.log(data)
  const id = req.params.id
  let pathToInventoryFile = "../server/data/inventories.json"
  
  const editedInventory = {
    "id" : id,
    "warehouseID" : data.id,
    "WarehouseName": data.warehouseName,
    "itemName" : data.itemName,
    "description": data.description,
    "category": data.category,
    "status" : data.status,
    "quantity" : data.quantity
  };

  console.log(editedInventory)

  const rawData = fs.readFileSync(pathToInventoryFile, 'utf8', () => {})
  const inventories = JSON.parse(rawData);
  //Find and update this warehouse in the array
  const updatedInventories = inventories.map(inv => inv.id !== id ? inv : editedInventory);
  const stringifiedInventories = JSON.stringify(updatedInventories, null, 2);


  //Rewrite warehouse JSON file
  fs.writeFile(pathToInventoryFile, stringifiedInventories, (err) => {
    res.json("write success!")
    if (err) {
      console.log("Got err: ", err);
      res.status(403).json("error, not found");
    }
  });
})


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
