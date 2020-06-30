const express = require("express");

const booksRouter1 = express.Router();
const bookData=require('../model/bookdata');

function router(nav){ 
    booksRouter1.get('/',function(req,res){
         bookData.find()
         .then(function(books){
            res.render("book",{
                nav,
                title:'Library Management',
                books   
            });
         })   
    });
    
    booksRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        bookData.findOne({_id:id})
        .then(function(book){
        res.render('books',{
        nav,
        title:'Library Management',
        book
        });
    });
});

booksRouter1.get('/:id/delete',function(req,res){
    const id=req.params.id;
   bookData.remove({_id:id})
     .then(function(book){
    res.redirect('/book');  
});
});

booksRouter1.get('/:id/update',function(req,res){
    const id=req.params.id;
    bookData.findOne({_id:id})
    .then(function(book){
    res.render('updatebook',{
    nav,
    title:'Library Management',
   book   
    });
});
});
booksRouter1.post('/:id/update/ok',function(req,res){ 
    const id=req.params.id;      
    
   var values= bookData.updateOne({_id:req.params.id},{title:req.body.title,

author:req.body.author,genre:req.body.genre,image:req.body.image})
.then(function(book){
     res.redirect('/book');
    
    });  
});
    return booksRouter1;
}
    module.exports=router;