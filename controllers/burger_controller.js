const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


//burger routes
router.get("/", function(req, res) {
    burger.all(function(data){
        let burgers = data.filter((x) => x.eaten === 0);
        let eaten = data.filter((x) => x.eaten === 1);
        var hbsObject = {
            burgers: burgers,
            eaten: eaten
        };
        res.render("index", hbsObject);
    })
    
});

router.get("/api/burgers", function(req, res) {
    burger.all(function(data){
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(['name'], [req.body.name], function(result){
        res.json({ id: result.insertId });
    })
})


module.exports = router;
