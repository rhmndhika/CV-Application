const express = require("express");
const router = express.Router();
const CV = require("../models/CV");

const createCV = async (req, res) => {

    const newCV = new CV(req.body);

    try {        
        const savedCV = await newCV.save();
        res.status(200).json(savedCV);
    } catch (error) {
        res.status(500).json(error);
    }
}

// const getAllProfile = async (req, res) => {
//     try {
//         const profiles = await Profile.find({}).populate('creator')
        
//         res.status(200).json(profiles);
//     } catch(error) {
//         res.status(500).json(error);
//     }
// }

const getCVByID = async (req, res) => {
    try {
        const cv = await CV.findOne({ Creator: req.params.id })
            .populate({ path: 'Company', model: 'companys' })
            .populate('Creator');
        
        res.status(200).json(cv);
    } catch(error) {
        res.status(500).json(error);
        console.log(error)
    }
}


router.post("/cv/create", createCV);
router.get("/cv/find/:id", getCVByID);
// router.get("/profile/all", getAllProfile);



module.exports = router