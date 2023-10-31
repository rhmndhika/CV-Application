const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

const createProfile = async (req, res) => {

    const newProfile = new Profile(req.body);

    try {        
        const savedProfolie = await newProfile.save();
        res.status(200).json(savedProfolie);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllProfile = async (req, res) => {
    try {
        const profiles = await Profile.find({}).populate('creator')
        
        res.status(200).json(profiles);
    } catch(error) {
        res.status(500).json(error);
    }
}

const getProfileByEmail = async (req, res) => {
    try {
        const profile = await Profile.findOne({creator: req.params.id}).populate('creator')
        console.log(profile)
        
        res.status(200).json(profile);
    } catch(error) {
        res.status(500).json(error);
    }
}

router.post("/profile/create", createProfile);
router.get("/profile/find/:id", getProfileByEmail);
router.get("/profile/all", getAllProfile);



module.exports = router