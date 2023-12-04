import { assignTokenToUser, verifyToken } from "../utils/tokens.js";
import {
    createNewUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    findUserById
} from "../services/auth.service.js";
//setup configuration of cookies for send tokens in response
const cookieConfig = {
    httpOnly: true,
    maxAge: 24 * 24 * 28 * 28
};
export const register = async (req, res) => {
    const { name, username, email, password, about, headline, role } = req.body;
    const isExist = await findUserByEmail(email);
    if (isExist) {
        return res.status(400).json({ message: "Email has already exists " });
    }
    const user = await createNewUser({
        name,
        username,
        email,
        password,
        about,
        headline,
        role
    });
    res.status(200).json({ user });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmailAndPassword(email, password);
    //If user not found, Invalid email or password
    if (!user) {
        return res.status(404).json({ message: "Invalid email or password " });
    }
    const token = assignTokenToUser({ _id: user._id });
    res.cookie("token", token, cookieConfig);
    res.status(200).json({ user });
};

export const refresh = async (req, res) => {
    const token = req.cookies?.token;
    const verifyUser = verifyToken(token);
    if (!verifyUser) {
        res.status(401).json({ message: "your not authenticated" });
    }
    const user = await findUserById(verifyUser._id);
    res.status(200).json({ user });
};
