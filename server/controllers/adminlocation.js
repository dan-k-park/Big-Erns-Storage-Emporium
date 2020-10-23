const { AdminLocation } = require('../models')

const createAdminLocation = async (req, res) => {
    try {
        const adminLcoation = await adminLcoation.create(req.body);
        return res.status(201).json({ adminLcoation });
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const getAllAdminLocations = async (req, res) => {
    try {
        const adminLocations = await adminLocations.findAll();
        return res.status(200).json({ adminLocations });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateAdminLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await AdminLocation.update(req.body, {
            where: { id: id}
        });
        if (updated) {
            const updatedAdminLocation = await AdminLocation.findOne({ where: { id: id} });
            return res.status(200).json({ adminlocation: updatedAdminLocation })
        }
        throw new Error('Admin not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteAdminLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AdminLocation.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("AdminLocation deleted");
        }
        throw new Error("AdminLocation not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createAdminLocation,
    updateAdminLocation,
    deleteAdminLocation,
    getAllAdminLocations
}