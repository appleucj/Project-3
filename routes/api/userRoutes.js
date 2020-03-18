const router = require("express").Router();
const db = require("../../models");

// Create
router.post("/", (req, res) => {
  const { email, password } = req.body;
  db.User.create({
    email: email,
    password: password
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
  const { email, password } = req.body;
  db.User.findOneAndUpdate({
    email: email,
    password: password
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