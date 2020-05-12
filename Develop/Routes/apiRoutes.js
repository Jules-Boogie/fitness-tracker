const db = require("../models")

module.exports = function (app) {

    // we will need a create 
    // we will need an update

    //seed
    //  let dbfirst = {
    //     day: new Date().setDate(new Date().getDate()-10),
    //     exercises: [
    //       {
    //         type: "resistance",
    //         name: "Bicep Curl",
    //         duration: 20,
    //         weight: 100,
    //         reps: 10,
    //         sets: 4
    //       }
    //     ]
    //   }

    //   db.Workout.create(dbfirst)
    //   .then(dbworkout => {
    //     console.log(dbworkout);
    //   })
    //   .catch(({message}) => {
    //     console.log(message);
    //   });

    // get/read

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
            .then(db => {
                res.json(db);
            })
            .catch(err => {
                res.json(err);
            });
    })


    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(db => {
                res.json(db);
            })
            .catch(err => {
                res.json(err);
            });

    })


    //post/create/insert
    // app.post("/api/workouts/range", function (req, res) {
    //     db.Workout.create({})
    //         .then(workout => {
    //             res.json(workout);

    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // })

    app.post("/api/workouts", function ({body}, res) {
        db.Workout.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })



    //put/update

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



    // app.delete("/clearall", (req, res) => {
    //     db.Workout.remove({}, (error, response) => {
    //       if (error) {
    //         res.send(error);
    //       } else {
    //         res.send(response);
    //       }
    //     });
    //   });













}