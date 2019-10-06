const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


//burger routes
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/api/burgers", function(req, res) {
    burger.all(function(data){
        res.json(data);
    });
});

router.post("api/burgers", function(req, res){
    burger.create(['name', 'eaten'], [req.body.name, req.body.eaten], function(result){
        res.json({ id: result.insertId });
    })
})


module.exports = router;
