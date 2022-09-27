const express = require('express');
const router = express.Router();
const {
    getworkouts,
    getworkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}= require('../controllers/workoutController')


//GET all workouts
router.get('/',getworkouts);

//GET a asingle workout
router.get('/:id',getworkout);

//POST a new workout
router.post('/',createWorkout);

//DELETE WORKOUT
router.delete('/:id',deleteWorkout);

//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports=router;