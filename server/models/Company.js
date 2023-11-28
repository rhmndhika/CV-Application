const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
        unique: true
    },
    Image: {
        type: String
    },
    Description: {
        type: String,
    },
}, { timestamps: true })

const CompanyModel = mongoose.model("companys", CompanySchema)
module.exports = CompanyModel