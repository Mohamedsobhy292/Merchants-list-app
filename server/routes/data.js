const express = require("express");
const mongoose = require("mongoose");
const Merchant = mongoose.model("Merchant");
const data = require("../../data.js");

const router = express.Router();

const fillData = function fillData(req, res) {
  data.map(async merchant => {
    const { firstName, lastName, email, phone, hasPremium, bids } = merchant;
    const merchantToAdd = new Merchant({
      firstName,
      lastName,
      email,
      phone,
      hasPremium,
      bids
    });
    await merchantToAdd.save();
  });
  res.json("data added");
};

/* FILL DATA */
router.get("/", fillData);

module.exports = router;
