const router = require("express").Router();
const Todo = require("../models/Todo");

//Create
router.post("/todos", async(req, res) => {
    const newTodo = {
        name: req.body.name
    }
    const todoAdded = await Todo.create(newTodo)
    res.json(todoAdded);
});

//Read
router.get("/todos", async(req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
});

//Update
router.put("/todos/:id", async(req, res) => {

    try {
        const updated = await Todo.findOneAndUpdate({_id: req.params.id}, req.body);
        res.json(updated);
    }
    catch(err) {
        res.status(500);
    }

});

//Delete
router.delete("/todos/:id", async(req, res) => {
    const deleted = await Todo.remove({_id: req.params. id});
    res.json(deleted);
});

module.exports = router;
