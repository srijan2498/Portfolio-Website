const express = require('express')
const { addNewExperience, getAllExperiences, deleteExperience, updateExperience } = require('../controllers/experienceController')
const jwtAuth = require('../middlewares/AuthMiddleware')


const router = express.Router()

router.post('/addNewExperience', jwtAuth, addNewExperience)
router.get('/allExperiences', getAllExperiences)
router.delete('/deleteExperience/:id', jwtAuth, deleteExperience)
router.put('/updateExperience/:id', jwtAuth, updateExperience)

module.exports = router