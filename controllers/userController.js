//Importing express and using the router module
const express = require('express');
var router = express.Router();
var Handlebars = require('handlebars');




//Importing mongoose to connect to mongodb
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Creating a route to our landing page
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.render("user/addOrEdit",{
                list:docs
            });
        }
        else{
            console.log('Error in retrieving information' + err);
        }
    });
    
    
});

//POST Route to submit the information
router.post('/',(req,res)=>{
    insert(req,res);
});

function insert(req,res){
    var user = new User();
    user.title = req.body.title;
    user.description = req.body.description;
    user.save((err,doc)=>{
        if(!err)
            {
                User.find((err,docs)=>{
                    if(!err){
                        res.render("user/addOrEdit",{
                            list:docs
                        });
                    }
                    else{
                        console.log('Error in retrieving information' + err);
                    }
                });
            }
        else{
            console.log('Error occured during record insertion' + err);
        }
    });
}


router.get('/delete/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id,(err,doc) =>{
        if(!err){
            res.redirect('/user');
        }
        else{
            console.log('Error occurred while deleting data' + err);
        }
    });
});


//Exporting router to be accessed in other modules
module.exports = router;