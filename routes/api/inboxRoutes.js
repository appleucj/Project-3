const router = require("express").Router();
const db = require("../../models");

// Create
router.post("/", (req, res) => {
  const { sender, receiver, subject, message, date, owner_id, image_path } = req.body;
  db.Pet.create({
   sender: sender,
   receiver: receiver,
    subject: subject,
    date: date,
    message: message,
    owner_id: owner_id,
    image_path: image_path
  }).then(result => {
    res.json(result)
  });
  
});

// Read
router.get("/", (req, res) => {
  db.User.find().then(result => {
    res.json(result);
  })
});

// Update
router.put("/:id", (req, res) => {
    const { sender, receiver, subject, message, date, owner_id, image_path } = req.body;
  db.User.findOneAndUpdate({
    sender: sender,
    receiver: receiver,
    subject: subject,
    date: date,
    message: message,
    owner_id: owner_id,
    image_path: image_path
  }).then(result => {
    res.json(result)
  });
})
// Delete
router.delete("/:id", (req, res) => {
  db.User.remove({ _id: req.params.id }).then(result => {
    res.json(result)
  });
})

module.exports = router;