import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

// @desc    Update status of complete workout log
// @route   PATCH /api/workouts/log/complete/:id
// @access  Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {
	const logId = +req.params.id
	try {
		const workoutLog = await prisma.workoutLog.update({
			where: {
				id: logId
			},
			data: {
				isCompleted: true
			}
		})
		res.json(workoutLog)
	} catch (e) {
		res.status(404)
		throw new Error('Workout log not found!')
	}
})
