const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

const createCompany = async (req, res) => {

    const newCompany = new Company(req.body);

    try {        
        const savedCompany = await newCompany.save();
        res.status(200).json(savedCompany);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllCompany = async (req, res) => {
    try {
        const companys = await Company.find({})
        
        res.status(200).json(companys);
    } catch(error) {
        res.status(500).json(error);
    }
}

router.post("/company/create", createCompany);
router.get("/company/get/all", getAllCompany);


module.exports = router