const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/sample",
{ useNewUrlParser : true, useUnifiedTopology : true },
(err) => {
    console.log(err ? err : "Connected");
});

const app = express();

app.use(express.json());

app.post("/users", (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

app.get("/users", (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.json({ users : users });
    });
});

app.get("/users/:id", (req, res, next) => {
    let id = req.params.id;
    // User.find({ "_id" : id }, (err, users) => {
    //     if (err) return next(err);
    //     res.json({ users : users });
    // });

    // find takes an object query
    // It gives multiple documents at a time which match the query.
    // All the documents comes inside an array

    // User.findOne({ "_id" : id }, (err, user) => {
    //     if (err) return next(err);
    //     res.json(user);
    // });

    // findOne takes an object query
    // It gives the first document which matches the query.

    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });

    // findById takes an id
    // It gives the document which matches the id.
});

app.put("/users/:id", (req, res, next) => {
    // User.update({ "_id" : req.params.id }, req.body, (err, updatedUsers) => {
    //     if (err) return next(err);
    //     res.json({ updatedUsers : updatedUsers });
    // });

    // User.updateOne({ "_id" : req.params.id }, req.body, (err, updatedUser) => {
    //     if (err) return next(err);
    //     res.json(updatedUser);
    // });

    User.findByIdAndUpdate(req.params.id, req.body, { new : true }, (err, updatedUser) => {
        if (err) return next(err);
        res.json(updatedUser);
    });
});

app.delete("/users/:id", (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) return next(err);
        res.json(`${deletedUser.name} has deleted`);
    });
});

// Error handlers

app.use((req, res, next) => {
    res.send("Page not found");
    next();
});

app.use((err, req, res, next) => {
    res.send(err);
    next();
});

app.listen(7000);