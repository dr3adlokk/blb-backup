const mongoose = require("mongoose")
const Blog = require("../models/blogmodel/blogmodel")
mongoose.Promise = global.Promise

const blogSeed = [
    {
        number: 1,
        date: "9-10-2013",
        link: "https://www.youtube.com/embed/MiP21jrUyAc",
        title: "Felled Trees in Studio (1 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 1st of 3 promo videos talking about the making of, 'Where We Been'."
    },
    
    {
        number: 2,
        date: "9-10-2013",
        link: "https://www.youtube.com/embed/VoDtDdccapU",
        title: "Felled Trees in Studio (2 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 2nd of 3 promo videos talking about the making of, 'Where We Been'."
    },
    
    {
        number: 3,
        date: "9-10-2013",
        link: "https://www.youtube.com/embed/-0njcvU3nKA",
        title: "Felled Trees in Studio (3 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 3rd and last promo video talking about the making of, 'Where We Been'."
    },
    
    {
        number: 4,
        date: "4-11-2013",
        link: "https://www.youtube.com/embed/jw-6_fqlXYU",
        title: "Peace'd Out in Studio (1 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is video 1 of 3."
    },
    
    {
        number: 5,
        date: "4-11-2013",
        link: "https://www.youtube.com/embed/IL2gPkjr2uI",
        title: "Peace'd Out in Studio (2 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is video 2 of 3."
    },
    
    {
        number: 6,
        date: "4-11-2013",
        link: "https://www.youtube.com/embed/sO9CoSOKI_M",
        title: "Peace'd Out in Studio (3 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is the third and final installment."
    }  
]

const connect_db = () => {
    console.log("in connect_db")
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/BlbDB",
        {
            useMongoClient: true
        } 
    )
}

const seedDB = () => {
    
        Blog.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('successfully removed documents');
            }
        })
    
        for (let blog of blogSeed) {  
            const blog_instance = new Blog(blog);
            blog_instance.save().catch(err => console.log(err))
        }
    
    }
    
    module.exports = {
        seedDB,
        connect_db
    }