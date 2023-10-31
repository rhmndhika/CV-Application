const mongoose = require('mongoose')

const CVSchema = new mongoose.Schema({
    FirstName : {
        type: String
    },
    LastName : {
        type: String
    },
    Age : {
        type: String
    },
    Address : {
        type: String
    },
    Nationality : {
        type: String
    },
    DateOfBirth : {
        type: String
    },
    Email : {
        type: String
    },
    PhoneNumber : {
        type: Number
    },
    Salary : {
        type: Number
    },
    University : {
        type: String
    },
    GraduationDate : {
        type: Date
    },
    Qualification : {
        type: String
    },
    Major : {
        type: String
    },
    Position : {
        type: String
    },
    CompanyName : {
        type: String
    },
    MonthEntry : {
        type: Date
    },
    MonthLeave : {
        type: Date
    },
    FieldOfWork : {
        type: String
    },
    Industry : {
        type: String
    },
    JobDescription : {
        type: String
    },
    Company : [
        {
            type: mongoose.Schema.Types.ObjectId,    
            ref: 'companys'
        }
    ],
    Creator : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
}, { timestamps: true })

const CVModel = mongoose.model("cvs", CVSchema)
module.exports = CVModel