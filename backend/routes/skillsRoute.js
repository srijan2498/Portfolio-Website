const express = require('express')
const { addNewSkill, getAllSkills, deleteSkill } = require('../controllers/skillsController')
const jwtAuth = require('../middlewares/AuthMiddleware')

const router = express.Router()

router.post('/addNewSkill', jwtAuth, addNewSkill)
router.get('/allSkills', getAllSkills)
router.delete('/deleteSkill/:id', jwtAuth, deleteSkill)

module.exports = router