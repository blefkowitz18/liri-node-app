require("dotenv").config();
var keys = require("./keys")
var spotify = new Spotify(keys.spotify);
if (process.argv[2] === "spotify-this-song") {
    let songChoice = process.argv[3]
    spotify.search({ type: "track", query: songChoice }), function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    }
}
    var axios = require("axios");
    axios.get("http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&apikey=trilogy").then(
        function (response) {
            let movie = process.argv[3]
            if(process.argv[2]==="movie-this"){
                console.log("The movie title is " + response.title)
                console.log("The year the movie came out is " + response.year)
                console.log("The IMDB rating is " + response.rating[0])
                console.log("The rotten tomatos rating is " +response.rating[1])
                console.log("This movie was filmed in " + response.country)
                console.log("This movie is in " +response.language)
                console.log("The poot of the movie: " + response.plot)
                console.log("The actors in the movie " + response.actors)
            }
        })

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            let artist = process.argv[3]
            if (process.argv[2]==="concert-this"){
            console.log("The venue name is: " + response.venue.name)
            console.log("The venue location is: " + response.venue.city)
            console.log("The concert takes place on: " + response.datetime)
            }
        }
    )

