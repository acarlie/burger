const connection = require("../config/connection.js");

const orm = {
    all: function(table, cb){
        let sql = 'SELECT * FROM ? ;';
        connection.query(sql, [table], function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    create: function(table, cb){

    },
    update: function(table, cb){

    },
    delete: function(table, cb){

    }
}

module.exports = orm;

