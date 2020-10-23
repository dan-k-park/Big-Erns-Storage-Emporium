const { Unit } = require('../models');

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

module.exports = {
    createUnit,
    getAllUnits,
    getUnitById,
    updateUnit,
    deleteUnit
}