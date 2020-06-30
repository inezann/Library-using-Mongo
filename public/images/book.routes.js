const express = require("express");

const booksRouter1 = express.Router();//using express.router class for book router
//called function
function router(nav){

var books=[
    { title:'If on a Winter's Night a Traveler',
      author:'Italo Calvino',
      genre:'Fiction',
      desc:"If on a Winter's Night a Traveler may well be the ultimate love letter to the reader. Calvino's novel is a masterfully created, startlingly unique work of fiction. At its core is an ingenious concept the likes of which could have only come from the unparalleled imagination of Calvino.",
      img:"calvino.jpg"   
    },
    { title:'Infinite Jest',
    author:'David Foster Wallace',
    genre:'Humour, Satire, Science Fiction, Tragicomedy, Postmodern literature, Hysterical realism',
    desc:"Infinite Jest is unique; it was bred in the optimism and new frontiersmanship of the dot-com 1990s but was simultaneously an early omen of where we are today. It looks into our present beyond what were only horizons when it was written: the tensions of a global economy, the opiate of on-demand entertainment, the near-impossible pursuit of greatness in a winner-take-all society.",
    img:"infj.jpg"   
    },
    { title:'Things Fall Apart',
    author:'Chinua Achebe',
    genre:'Historical Fiction',
    desc:'Drawing on the history and customs passed down to him, Achebe tells the tale Okonkwo, a strong-willed member of a late-19th-century Nigerian village. As we follow Okonkwo's story, we get a glimpse of the intricacies of village life and the complex social structures that come into play.',
    img:"chin.jpg"   
    },
    { title:'To Kill a Mockingbird',
    author:'Harper Lee',
    genre:"Bildungsroman, Thriller, Southern Gothic, Domestic Fiction, Legal Story",
    desc:"While To Kill a Mockingbird is a favorite book of pretty much everyone who has read it, it's important to remember that it continues to be subversive and challenging to the status quo. The protagonist is a young girl named Scout and except for her father, all the main characters in the book are marginalized by the power structure of their town.",
    img:"mock.jpg"  
    },
    { title:The Wind-Up Bird Chronicle',
    author:'A P J Abdul Kalam',
    genre:'Haruki Murakami',
    desc:"The Wind-Up Bird Chronicle is pure Murakami — a vast, enchanting mystery filled with dreamlike surrealism. Considered by many to be his best work, the novel tackles themes as varied as the nature of consciousness, romantic disappointment, and the lingering wounds of World War II.",
    img:"haru.jpg"  
    },
    { title:'The Phantom Tollbooth',
    author:'Norton Juster',
    genre:'Fantasy',
    desc:"The Phantom Tollbooth is the story of Milo, a very bored boy who comes home one day to find a magical tollbooth in his room. When Milo drives his car through the tollbooth gate, he finds himself in the Lands Beyond, a country inhabited by living language in the forms of animals, magicians, royalty, mountains, seas, and cities.",
    img:"phn.jpg"  
    },
    { title:'Never Let Me Go',
    author:' Kazuo Ishiguro',
    genre:'Fiction',
    desc:" Never Let Me Go deals with love and disappointment makes it a book that anyone who ever plans to love another person should probably read immediately.",
    img:"nlg.jpg"  
    }
    ]  
    
    
    booksRouter1.get('/',function(req,res){
        res.render("book",
    {
       
        nav,
        title:'Library Management',
        books    
    });
    });
   
    booksRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('books',
        {
       
        nav,
        title:'Library Management',
        book:books[id]
        });
    });
    return booksRouter1;
}
    module.exports=router;