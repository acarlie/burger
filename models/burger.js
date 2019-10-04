const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        return orm.all("burgers", cb);
    }

// return partially filled orm functions.

};

module.exports = burger;





