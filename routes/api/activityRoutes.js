const router = require("express").Router();
const db = require("../../models");

// Create
router.post("/", (req, res) => {
  const { activity_id, pet_id, person_id, date, time, notes, medication } = req.body;
  db.Pet.create({
    activity_id: activity_id,
    pet_id: pet_id,
    person_id: person_id,
    date: date,
    time: time,
    notes: notes,
    medication: medication
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
    const { activity_id, pet_id, person_id, date, time, notes, medication } = req.body;
  db.User.findOneAndUpdate({
    activity_id: activity_id,
    pet_id: pet_id,
    person_id: person_id,
    date: date,
    time: time,
    notes: notes,
    medication: medication
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