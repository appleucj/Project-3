const router = require("express").Router();
const db = require("../../models");

// Create
router.post("/", (req, res) => {
  const { name, species_id, birthday, image_path, owner_id } = req.body;
  db.Pet.create({
    name: name,
    species: species_id,
    birthday: birthday,
    image: image_path,
    owner: owner_id
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
    const { name, species_id, birthday, image_path, owner_id } = req.body;
  db.User.findOneAndUpdate({
    name: name,
    species: species_id,
    birthday: birthday,
    image: image_path,
    owner: owner_id
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