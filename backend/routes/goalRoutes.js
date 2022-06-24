const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')


router.route('/').get(getGoals).post(setGoal)

/*
    You can create a seperate function and insert in inside
    where (req,res) was first located 
*/

// This was the second alternate version
// router.get('/', getGoals)

// You can create a function within the body like this
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Get Goals' })
// })

// Line 6 takes care of the work for more efficent line usage
//router.post('/', setGoal)

// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'Set Goal' })
// })


router.route('/:id').put(updateGoal).delete(deleteGoal)

// Line 6 takes care of the work for more efficent line usage
// router.put('/:id', updateGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update Goal ${req.params.id}` })
// })

// Line 6 takes care of the work for more efficent line usage
// router.delete('/:id', deleteGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete Goal ${req.params.id}` })
// })



module.exports = router