const mongoose = require("mongoose")
const schema = mongoose.Schema;
//by default, mongoose does not include virtuals when you convert a document to json 
// to include virtuals in express' res.json as express does not include virtuals by default.
const opts = { toJSON: { virtuals: true } };

var workoutSchema = new schema({
    day:{
        type: Date,
        default: Date.now()

    },
    exercises:[
        {
        type:{
            type: String,
            
        },
        name:{
            type: String
        },
        duration:{
            type: Number
            
        },
        distance:{
            type: Number
        },
        weight:{
            type: Number
        },
        sets:{
            type: Number
        },
        reps:{
            type: Number
        }
        }
    ]
},opts // got this from https://mongoosejs.com/docs/tutorials/virtuals.html
);

workoutSchema.virtual("totalDuration").get(function(){
   return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    },0)
})

var Workout = mongoose.model("Workout", workoutSchema)

//In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.




module.exports = Workout;