import userModel from "../models/user.js";
import generateToken from "../utils/generateToken.js";

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) return res.status(400).json({ success: false, msg: 'Username or password is missing' });

        const findUser = await userModel.findOne({ username: username });
        if (!findUser) return res.status(400).json({ success: false, msg: 'Username or password is incorrect' });

        if (findUser.password !== password) return res.status(400).json({ success: false, msg: 'Username or password is incorrect' });

        const token = generateToken(findUser._id);

        return res.status(200).json({ success: true, auth_token: token, msg: "login successful" });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const register = async (req, res) => {
    const userid = req.userid;

    const { username, password, firstName, lastName, email, role } = req.body;

    if (!username || !password || !firstName || !lastName || !email || !role) return res.status(400).json({ success: false, msg: 'All fields are required' });

    try {

        const checkIfIsAdmin = await userModel.findById(userid);
        if (checkIfIsAdmin.role !== "admin") return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        //check if username and email already exists
        const checkIfUsernameExists = await userModel.findOne({ username: username });
        if (checkIfUsernameExists) return res.status(400).json({ success: false, msg: 'Username already exists' });

        const checkIfEmailExists = await userModel.findOne({ email: email });
        if (checkIfEmailExists) return res.status(400).json({ success: false, msg: 'Email already exists' });

        await userModel.create({ username, password, firstName, lastName, email, role });

        return res.status(200).json({ success: true, msg: 'User created successfully' });

    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getAllUsers = async (req, res) => {
    const userid = req.userid;

    try {
        const checkIfIsAdmin = await userModel.findById(userid);
        if (checkIfIsAdmin.role !== "admin") return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        const users = await userModel.find({});

        return res.status(200).json({ success: true, users });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getUserById = async (req, res) => {
    const userid = req.userid;
    const id = req.params.id;

    try {
        const checkIfIsAdmin = await userModel.findById(userid);
        if (checkIfIsAdmin.role !== "admin") return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        const user = await userModel.findById(id);

        return res.status(200).json({ success: true, user });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const updateUser = async (req, res) => {
    const userid = req.userid;
    const id = req.params.id;

    try {
        const checkIfIsAdmin = await userModel.findById(userid);
        if (checkIfIsAdmin.role !== "admin") return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        await userModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ success: true, msg: 'User updated successfully' });

    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const deleteUser = async (req, res) => {
    const userid = req.userid;
    const id = req.params.id;

    try {
        const checkIfIsAdmin = await userModel.findById(userid);
        if (checkIfIsAdmin.role !== "admin") return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        const finduser = await userModel.findById(id);
        if (finduser.role === "admin" || finduser._id === id) return res.status(403).json({ msg: 'You are not authorized to perform this action' });

        await userModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, msg: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

export { login, register, getAllUsers, getUserById, updateUser, deleteUser };