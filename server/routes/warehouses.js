const express = require("express");
const router = express.Router();
const warehouses = require("../data/warehouses.json");
const inventory = require("../data/inventories.json");
const fs = require("fs");

const warehouseData = () => {
    let warehousesInfo = [];
    warehouses.forEach(warehouse => {
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
    res.json(warehouseData(warehouses))
    const newObject = JSON.stringify(warehouses, null, 2)
    fs.writeFileSync("../server/data/warehouses.json", newObject, (err) => {
        
        if (err) {
            res.status(403).json("error, not found");
        }
    })

    // Removing all inventories associated with that inventory
   const rawInv = inventory.filter((item) => item.warehouseID !== id);
   
       // JSON stringify these arrays back
       const newInv = JSON.stringify(rawInv, null, 2)
   
   
       // fs writefiles
    
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


  
  router.get('/', (req, res) => {
    res.status(200).json(warehouseData(warehouses))
    });

module.exports = router;

