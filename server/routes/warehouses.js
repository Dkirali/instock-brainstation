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
    warehousesJson.forEach(warehouse => {
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
    res.status(200).json(warehouseData(warehousesJson))
    });

module.exports = router;

