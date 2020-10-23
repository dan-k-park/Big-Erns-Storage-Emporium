const { response } = require('express');
const { Admin, Location, Unit, User } = require('../models');
const { get } = require('../routes');

// Admin Controller Actions
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

// AdminLocation Controller Actions
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

// Location Controller Actions
const createLocation = async (req, res) => {
    try {
        const location = await Location.create(req.body);
        return res.status(201).json({ location });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }   
}

const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        return res.status(200).json({ locations });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await Location.findOne({
            where: { id: id }
        });
        if (location) {
            return res.status(200).json({ location });
        }
        return res.status(404).send('Location with the specified ID does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateLocation = async(req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Location.update(req.body, {
            where: { id: id}
        });
        if (updated) {
            const updatedLocation = await Location.findOne({ where: { id: id} });
            return res.status(200).json({ location: updatedLocation })
        }
        throw new Error('Location not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Location.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Location deleted");
        }
        throw new Error("Location not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Unit Controller Actions
const createUnit = async (req, res) => {
    try {
        const lnit = await Unit.create(req.body);
        return res.status(201).json({ unit });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }   
}

const getAllUnits = async (req, res) => {
    try {
        const units = await Unit.findAll();
        return res.status(200).json({ units });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getUnitById = async (req, res) => {
    try {
        const { id } = req.params;
        const unit = await Unit.findOne({
            where: { id: id }
        });
        if (unit) {
            return res.status(200).json({ unit });
        }
        return res.status(404).send('Unit with the specified ID does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateUnit = async(req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Unit.update(req.body, {
            where: { id: id}
        });
        if (updated) {
            const updatedUnit = await Unit.findOne({ where: { id: id} });
            return res.status(200).json({ unit: updatedUnit })
        }
        throw new Error('Unit not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Unit.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Unit deleted");
        }
        throw new Error("Unit not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Unit Controller Actions
const createUser = async (req, res) => {
    try {
        const lnit = await User.create(req.body);
        return res.status(201).json({ user });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }   
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({ users });
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id }
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exist');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id}
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id} });
            return res.status(200).json({ user: updatedUser })
        }
        throw new Error('User not found');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    createAdminLocation,
    updateAdminLocation,
    deleteAdminLocation,
    getAllAdminLocations,
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocation,
    deleteLocation,
    createUnit,
    getAllUnits,
    getUnitById,
    updateUnit,
    deleteUnit,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}