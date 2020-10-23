const { User } = require('../models');

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
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}