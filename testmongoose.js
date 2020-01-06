//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://hbs:hbs1234@cluster0-63tdc.gcp.mongodb.net/local_library?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));