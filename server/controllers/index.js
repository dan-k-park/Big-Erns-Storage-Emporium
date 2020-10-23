const { Admin, Location, Unit, User } = require('../models');
const { get } = require('../routes');

//Create and Save
const createAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        return res.status(201).json({ admin });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }   
}

// Retrieve all admins
const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        return res.status(200).json({ admins });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {
    createAdmin,
    getAllAdmins
}