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
    // the reduce method is applied to the exercises
   return this.exercises.reduce((total, exercise) => {
       //it takes in two arguments, the total - which is the total or first duration, and
       //second parameter which is the current ot last duration that was entered. 
       // the virtual "totalDuration" returns the cummulative sum .. because you dont want to add everything 
       // again right? you want to add the total value(the last calculated total) to a new value ( this new value after the user adds another exercise)
        return total + exercise.duration;
    },0) // the initial value of the total is set to zero for when the reduce function starts looping. If we did not include the zero, then the first element
    //array will be the first duration the user enters. I tried this it did not work. The field was "undefined"
})

var Workout = mongoose.model("Workout", workoutSchema)

//In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.




module.exports = Workout;