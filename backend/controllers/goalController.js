// @desc    Get goals
// @route   GET /api/goals
//@access   Prvate
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

// @desc    Set goal
// @route   POST /api/goals
//@access   Prvate
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set Goal' })
}

// @desc    Update goal
// @route   PUT /api/goals/:id
//@access   Prvate
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
}

// @desc    Delete goal
// @route   DELETE /api/goals/:id
//@access   Prvate
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}