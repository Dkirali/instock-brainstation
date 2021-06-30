const express = require("express");
const router = express.Router();
const fs = require("fs");
const inventory = require("../data/inventories.json");


router.get("/", (req, res) => {

    res.json(inventory);
  });

  module.exports = router;
