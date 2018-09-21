const express = require("express");
const merchantCtrl = require("../controllers/merchant-controller");

const router = express.Router();

/* GET ALL MERCHANT. */
router.get("/", merchantCtrl.getMerchants);

/* GET SINGLE MERCHANT. */
router.get("/:id", merchantCtrl.getSingleMerchant);

/* ADD MERCHANT */
router.post("/", merchantCtrl.addMerchant);

/* DELETE MERCHANT */
router.delete("/:id", merchantCtrl.removeMerchant);

/* EDIT MERCHANT */
router.patch("/:id", merchantCtrl.editMerchant);

module.exports = router;
