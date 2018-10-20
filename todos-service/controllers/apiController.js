var Todos = require('../models/todomodel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname}, function(err, todos) {
            if (err) throw err;

            res.send(todos);
        })
    });

    app.get('/api/todo/:id', function(req, res) {
        
        Todos.findById({ _id: req.params.id}, function(err, todo) {
            if (err) throw err;

            res.send(todo);
        })
    });

    app.post('/api/todos', function(req, res) {
        
        var newTodo = Todos({
            username : 'TestUser',
            todo : req.body.todo,
            isDone : req.body.isDone,
            hasAttachment: req.body.hasAttachment
        });

        newTodo.save(function(err, todo) {
            if (err) throw err;
    
            res.send(todo);
        });
    });

    app.put('/api/todo/:id', function(req, res) {
        
        Todos.findByIdAndUpdate(req.params.id, req.body , function(err, todo){
            if (err) {
                throw err;
            } else {
                Todos.findById({ _id: req.params.id}, function(err, newTodo) {
                    if (err) throw err;
        
                    res.send(newTodo);
                })
            }
            
        });

    });

}