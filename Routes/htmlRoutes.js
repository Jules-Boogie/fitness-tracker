var path = require("path")

module.exports = function(app) {
//render the exercise page
    app.get("/exercise", function(req,res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })

// render the dashboard
app.get("/stats", function(req,res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

// render the fitness tracker page which is the home page

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})


}

// require this file in our server.js