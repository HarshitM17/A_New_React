const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

//get all workouts
const getworkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({created: -1})

    res.status(200).json(workouts)
}


//get a single workout

const getworkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req,res)=>{    
    const{title,load,reps}=req.body
    //add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }}

// delete workout

const deleteWorkout = async (req,res) =>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(404).json({error: 'No such workout'})

    }

    res.status(200).json(workout)
}


//update a workout

const updateWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout){
        return res.status(404).json({error: 'No such workout'})

    }

    res.status(200).json(workout)
}

module.exports = {
    getworkouts,
    getworkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}