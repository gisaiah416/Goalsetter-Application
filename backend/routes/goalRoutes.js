const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')

/*
    You can create a seperate function and insert in inside
    where (req,res) was first located 
*/
router.get('/', getGoals)

// You can create a function within the body like this
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Get Goals' })
// })

router.post('/', setGoal)

// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'Set Goal' })
// })

router.put('/:id', updateGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update Goal ${req.params.id}` })
// })


router.delete('/:id', deleteGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete Goal ${req.params.id}` })
// })



module.exports = router