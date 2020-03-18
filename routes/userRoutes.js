const router = require("express").Router();
const db= require("../../models");
//Create 
router.post("/", (req, res) => {
    res.send("this will give us all the users")
}),

//Read
router.get("/", (req, res) => {
    db.User.create({
        email: email
    })
    res.send("this will give us all the users")
}),

//Update
router.put("/", (req, res) => {
    res.send("this will give us all the users")
}),

router.delete("/", (req, res) => {
    res.send("this will give us all the users")
}),





module.exports = router;