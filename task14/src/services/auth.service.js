import UserModel from "../models/User.model.js";
import { comparePassword, hashedPassword } from "../utils/bcrypt.js";
//register new user in database
export const createNewUser = async userData => {
    const hashed = await hashedPassword(userData.password);
    const newUser = new UserModel({ ...userData, password: hashed });
    return await newUser.save();
};
export const findUserByEmail = async email => {
    return await UserModel.findOne({ email });
};
export const findUserByEmailAndPassword = async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    const isMatchedPassword = await comparePassword(password, user.password);
    if (!isMatchedPassword) return null;
    return user;
};

export const findUserById = async userId => {
    return await UserModel.findById(userId);
};
