import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { getWorkoutLog } from './log/get-workout-log.controller.js'
import { updateCompleteWorkoutLog } from './log/update-exercise-log.controller.js'
import { createNewWorkoutLog } from './log/workout-log.controller.js'
import {
	createNewWorkout,
	deleteWorkout,
	getAllWorkouts,
	getSingleWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getAllWorkouts)
router
	.route('/:id')
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout)
	.get(protect, getSingleWorkout)

router
	.route('/log/:id')
	.post(protect, createNewWorkoutLog)
	.get(protect, getWorkoutLog)

router.route('/log/complete/:id').patch(protect, updateCompleteWorkoutLog)

export default router
