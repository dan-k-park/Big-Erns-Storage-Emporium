const { Location } = require('../models')

const createLocation = async (req, res) => {
    debugger

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

module.exports = {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocation,
    deleteLocation
}