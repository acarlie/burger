const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },
    specific: function(condition, cb){
        orm.specific('burgers', condition, function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    update: function(vals, condition, cb){
        orm.update('burgers', vals, condition, function(res){
            cb(res);
        })
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;





