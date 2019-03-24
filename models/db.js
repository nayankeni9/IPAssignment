const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB',{useNewUrlParser: true},
(err) =>{if (!err){console.log('MongoDB connected successfully')}
else {console.log('Error in MongoDB connection:' + err)}

});