const router = require("express").Router();
const db = require("../models");

router.post("/login", (req, res) => {
    db.User.findOne(req.body).then((user) => {
        req.login(user, function (err) {
            if (err) { return console.log(err); }
            return res.send('login');
        });
    }).catch((err) => res.json(err));
})

router.post("/signup", (req, res) => {
    db.User.create(req.body).then(() => {
        console.log("Successfully Created");
        return res.send("Success");
    }).catch((err) => res.json(err));
})

router.post("/pets", (req, res) => {
    db.Pet.create(req.body)
        .then(function () {
         return res.send("Pet Posted");
        }).catch((err) => res.json(err));
})


module.exports = router;

