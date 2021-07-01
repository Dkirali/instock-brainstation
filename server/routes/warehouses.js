const express = require("express");
const router = express.Router();
const warehouses = require("../data/warehouses.json");
const inventory = require("../data/inventories.json");

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

// Delete a single warehouse, and all the inventories in that warehouse

router.delete("/:id/warehouse", (req, res) => {
    // Removing from warehouse list
    let { id } = req.params;
    const warehouseFound = getWarehouse(id);
    selectedWarehouse = warehouses.indexOf(warehouseFound);
    warehouses.splice(selectedWarehouse, 1);
    res.json(warehouses)
    // Removing all inventories associated with that inventory
    inventory.forEach((item) => {
     if (item.warehouseID === warehouseFound.id) {
         inventory.splice(indexOf(item), 1)
     }

    });

    // JSON stringify these arrays back
    const newObject = JSON.stringify(warehouses, null, 2)
    const newInv = JSON.stringify(inventory, null, 2)


    // fs writefiles
    fs.writeFileSync("../server/data/warehouses.json", newObject, (err) => {
        console.log("write success!")
        if (err) {
            res.status(403).json("error, not found");
        }
    })
    fs.writeFileSync("../server/data/inventories.json", newInv, (err) => {
        console.log("write success!")
        if (err) {
            res.status(403).json("error, not found");
        }
    })
})

router.get("/:id/inventory", (req, res) => {
    let { id } = req.params;
    const warehouseFound = getWarehouse(id);
    const warehouseInventory = inventory.filter((item) => {
        return item.warehouseID === warehouseFound?.id;
    });
    res.status(200).json(warehouseInventory);
});

const warehouseData = () => {
    let warehousesInfo = [];
    warehouses.forEach(warehouse => {
        console.log(warehouse)
      let warehouseData =
      {
      "id": warehouse.id,
       "name":warehouse.name,
        "address":warehouse.address,
        "city": warehouse.city,
        "country": warehouse.country,
        "contactName":warehouse.contact.name,
        "contactPhone":warehouse.contact.phone,
        "contactEmail":warehouse.contact.email,
      }
      warehousesInfo.push(warehouseData)
    })
    return warehousesInfo;
  }
  
  
  router.get('/', (req, res) => {
    res.status(200).json(warehouseData(warehouses))
    });

module.exports = router;

