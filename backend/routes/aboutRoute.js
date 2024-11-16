const express = require('express')
const { getAbout, updateAbout } = require('../controllers/aboutController')
const jwtAuth = require('../middlewares/AuthMiddleware')

const router = express.Router()

router.get('/', getAbout)
router.put('/updateAbout/:id', jwtAuth, updateAbout)

module.exports = router