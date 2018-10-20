var Todos = require('../models/todomodel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res){

        // Seed Database
        var starterTodos = [
            {
                username : 'John.Doe@mailinator.com',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username : 'Jane.Doe@mailinator.com',
                todo: 'Buy Bread',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.count(function(err,cnt){
            if( cnt == 0) {
                Todos.create(starterTodos, function(err, results){
                    res.send(results);
        
                });
            } else {
                console.log("Found Records : " + cnt);
                Todos.find(function(err, results){
                    res.send(results);
                })
            }
        });
        
    });

}