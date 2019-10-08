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

router.get("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
    burger.specific(`id = ${id}`, function(data){
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create( ["name"], [req.body.name], function (result) {
        res.json(result);
    })
});

router.put("/api/burgers/:id", function(req, res){
    let id = req.params.id;
    burger.update( `eaten = ${req.body.eaten}` , `id = ${id}`, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

router.delete("/api/burgers/:id", function(req, res){
    let id = req.params.id;
    burger.delete(`id = ${id}`, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;
