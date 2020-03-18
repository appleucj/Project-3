const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api/userRoutes");

const app = express();

const PORT = process.env.PORT || 4000;

//be able to read the bode ofn a post in json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/project3', {useNewUrlParser: true});
=======
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/merntodo', { useNewUrlParser: true });
>>>>>>> master

//api routes
app.use("/api/users", userRoutes);
app.get("*", (req, res) => {
    res.send("sorry. no page here. go somewhere else.")
});

// start the server
app.listen(PORT, () => {
    console.log(`The server lives at port ${PORT}`);
});

