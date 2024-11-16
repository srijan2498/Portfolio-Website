const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    expType: {
        type: String,
        required: true
    }
})

const experienceModel = mongoose.model('experienceModel', experienceSchema)
module.exports = experienceModel