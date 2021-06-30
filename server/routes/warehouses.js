const router = require('express').Router();
const warehousesJson = require('../data/warehouses.json')

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
  
  
  router.get('/warehouses', (req, res) => {
    res.status(200).json(warehouseData(warehousesJson))
    });

module.exports = router;