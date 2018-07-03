const mongoose = require("mongoose")
const Episode = require("../models/episodemodel/episodemodel")
mongoose.Promise = global.Promise

const episodeSeed = [
    {
        number: 1,
        band: "Peace'd Out",
        title: "Peace'd Out debuts 'I Would Like To Feed Your Fingertips. To The Wolverines'",
        link: "https://www.youtube.com/embed/EaTE4DeomGE",
        description: "Fresh out of recording their debut EP, Peace'd Out came by Bright Lights to debut the band with a live performance of 'I Would Like To Feed Your Fingertips. To The Wolverines'."
    },
    
    {
        number: 2,
        band: "Peace'd Out",
        title: "Peace'd Out debuts 'Castlemania'",
        link: "https://www.youtube.com/embed/sSC4Rw0HHAc",
        description: "Fresh out of recording their debut EP, Peace'd Out came by Bright Lights to debut the band with a live performance of 'Castlemania'."
    },
    
    {
        number: 3,
        band: "Felled Trees",
        title: "Felled Trees perform Dinosaur Jr's 'Get Me'",
        link: "https://www.youtube.com/embed/L41a6gFEoeo",
        description: "The indie supergroup, Felled Trees, featuring Sergie and Sasha Loobkoff, Garrett Klahn, Ed Breckenridge, Steve Choi, and Roger Camero, perform 'Get Me' at Bright Lights."
    },
    
    {
        number: 4,
        band: "Surf Riot",
        title: "Surf Riot perfom 'Woods'",
        link: "https://www.youtube.com/embed/zqJmLiFnon8",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'Woods'."
    },
    
    {
        number: 5,
        band: "Surf Riot",
        title: "Surf Riot perform 'Angela's Song'",
        link: "https://www.youtube.com/embed/S894LGFIvgw",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'Angela's Song'."
    },
    
    {
        number: 6,
        band: "Surf Riot",
        title: "Surf Riot perform 'You Are An Aperture'",
        link: "https://www.youtube.com/embed/0qbnD36LhZ8",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'You Are An Aperture'."
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
};


const seedDB = () => {

    Episode.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully removed documents');
        }
    })

    for (let epi of episodeSeed) {  
        const epi_instance = new Episode(epi);
        epi_instance.save().catch(err => console.log(err))
    }

}

module.exports = {
    seedDB,
    connect_db
}
