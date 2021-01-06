const mongoose = require('mongoose');
mongoose.connect('todo_list_dbmongodb://localhost/',{ useNewUrlParser: true,useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open', function(){
    console.log('successfully connected to the database')

});

module.exports = db;