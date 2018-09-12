const mongoose = require("mongoose");
const Merchant = mongoose.model("Merchant");

exports.getMerchants = async function getMerchants(req, res) {
  const page = (req.query.page - 1) * 10 || 0;
  const merchants = await Merchant.find()
    .skip(page)
    .limit(10);
  res.json(merchants);
};

exports.addMerchant = async function getMerchants(req, res) {
  const { firstName, lastName, email, phone, hasPremium } = req.body;
  const merchant = new Merchant({
    firstName,
    lastName,
    email,
    phone,
    hasPremium
  });
  try {
    await merchant
      .save()
      .then(result => {
        res.json(result);
      })
      .catch(e => res.status(400).send({ message: e }));
  } catch (e) {
    res.status(400).send({ message: e.errors.name.message });
  }
};

exports.editMerchant = async function editMerchant(req, res) {
  const id = req.params.id;
  const merchantToEdit = await Merchant.findById(id);
  try {
    if (!merchantToEdit) {
      res
        .status(400)
        .send({ error: 401, message: "You cant edit this merchant" });
    } else {
      await Merchant.findByIdAndUpdate(id, { $set: req.body }).then(result =>
        res.json(result)
      );
    }
  } catch (e) {
    res.status(400).send({ error: 400, message: e });
  }
};

exports.removeMerchant = async function removeMerchant(req, res) {
  const id = req.params.id;
  try {
    const merchantToDelete = await Merchant.findById(id);
    if (!merchantToDelete) {
      res
        .status(400)
        .send({ error: 401, message: "You cant delete this merchant" });
    } else {
      Merchant.findByIdAndRemove(id, async (err, result) => {
        res.json(result);
      });
    }
  } catch (e) {
    res.status(400).send({ error: 400, message: e });
  }
};
