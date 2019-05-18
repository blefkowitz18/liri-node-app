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
                console.log(response.title)
                console.log(response.year)
                console.log(response.rating[0])
                console.log(response.rating[1])
                console.log(response.country)
                console.log(response.language)
                console.log(response.plot)
                console.log(response.actors)
            }
        })

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            let artist = process.argv[3]
            if (process.argv[2]==="concert-this"){
            console.log(response.venue.name)
            console.log(response.venue.city)
            console.log(response.datetime)
            }
        }
    )

