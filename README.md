

# Workout Tracker Application
Welcome to the Workout Tracker Application Repository!

## Summary 
 The app lets a user add and track workouts. In this activity, I worked on the back end component as the front end was provided. 

## Workout Tracker Application Link

[Live Deployed Link](https://workoutappi.herokuapp.com/)

## App Photo
![App Photo](https://github.com/Jules-Boogie/fitness-tracker/blob/master/public/Capture.PNG)



# Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [Morgan](http://expressjs.com/en/resources/middleware/morgan.html)                |  HTTP request logger middleware that automatically creates request logs.                   |
| [Mongodb](https://www.mongodb.com/)                              |           Document-oriented database used for storage data.               |
| [Mongoose](https://mongoosejs.com/)                              |           Object Data Modeling library for MongoDB and Node.js              |



## Code Snippet
The code below updates the exercise array using the $push method. 
```
app.put("/api/workouts/:id", function (req, res) {
        let id = req.params.id;
        let workout = req.body;
        db.Workout.findByIdAndUpdate(id, { $push: { exercises: workout } }
        ).then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.json(err)
        })
    })
```

## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/fitness-tracker.git ``` with terminal in the directory of your choice. 



## Installation Procedures
```
$ npm init -y 
$ npm install express
$ npm install mongoose
$ npm install morgan

```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
