const express = require('express');
const port = 5000;
const path = require('path');

// connection to mongodb
const db = require('./config/mongoose');
const Todo = require('./models/todo-list');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// controller
// adding todo list entres
app.get('/', function(req,res){
    Todo.find({}, function(err, todo){
        if(err){
            console.log('error in fetching data from db');
            return;
        }

        return res.render('home', {
            title: "My TODO List",
            todo_List: todo});

    });
});

// creating todo list
app.post('/create-todo-list', function(req,res){

    // mongodb database

    Todo.create({
        decription: req.body.decription,
        date: req.body.date,
        category: req.body.category
    }, function(err, newTodo){
        if (err){
            console.log('error in creating new list entries:', err);
            return;
        }

        console.log('********', newTodo);
        return res.redirect('back');
    });
});


// deleting data

app.get('/delete-todo/:id', function(req,res){
    console.log(req.params);
    let id= req.params.id;
    Contact.findByIdAndDelete(id, function(err){
        if (err){
            console.log('error deleting todo list entries from database');
            return;
        }
        return res.redirect('back')
    });

    
});

// starting up server
app.listen(port, function(err){
    if(err){
        console.log(`error running the server: ${err}`);
    }

    console.log(`the server is running in port:${port}`);
})