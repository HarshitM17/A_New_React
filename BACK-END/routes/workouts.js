const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel')

router.get('/',(req,res)=>{
    res.json({mssg: 'GET all workouts'})
});

//GET a asingle workout
router.get('/:id',(req,res)=>{
    res.json({json: 'GET a single workout'})
})

//POST a new workout
router.post('/', async (req,res)=>{
    const{title,load,reps}=req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a new workout'})
})
//DELETE WORKOUT
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'DELETE workout'})
})
//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE new workout'})
})

module.exports=router;