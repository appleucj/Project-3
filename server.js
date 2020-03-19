const express = require("express");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/api/userRoutes");
// const petRoutes = require("./routes/api/petRoutes");
// const ownerRoutes = require("./routes/api/ownerRoutes");
// const inboxRoutes = require("./routes/api/inboxRoutes");
// const activityRoutes = require("./routes/api/activityRoutes");

const app = express();

const PORT = process.env.PORT || 4000;

//be able to read the bode ofn a post in json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/merntodo', { useNewUrlParser: true });

//api routes
// app.use("/api/user", userRoutes);
// app.use("/api/pet", petRoutes);
// app.use("/api/owner", ownerRoutes);
// app.use("/api/inbox", inboxRoutes);
// app.use("/api/activity", activityRoutes);
app.get("*", (req, res) => {
    res.send("sorry. no page here. go somewhere else.")
});

// start the server
app.listen(PORT, () => {
    console.log(`The server lives at port ${PORT}`);
});

