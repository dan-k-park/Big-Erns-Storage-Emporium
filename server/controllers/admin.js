const { Admin } = require('../models')

const createAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        return res.status(201).json({ admin });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }   
}

const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        return res.status(200).json({ admins });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findOne({
            where: { id: id }
        });
        if (admin) {
            return res.status(200).json({ admin });
        }
        return res.status(404).send('Admin with the specified ID does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateAdmin = async(req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Admin.update(req.body, {
            where: { id: id}
        });
        if (updated) {
            const updatedAdmin = await Admin.findOne({ where: { id: id} });
            return res.status(200).json({ admin: updatedAdmin })
        }
        throw new Error('Admin not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
}