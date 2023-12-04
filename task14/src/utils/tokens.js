import Jwt from "jsonwebtoken";
import { tokenSecretKey } from "../config/exportEnv.js";
export const assignTokenToUser = userObj => {
    try {
        const userToken = Jwt.sign({ ...userObj }, tokenSecretKey, {
            expiresIn: "3d"
        });
        return userToken;
    } catch (error) {
        console.log("Error in Tokens");
    }
};

export const verifyToken = token => {
    try {
        const isVerifiedUser = Jwt.verify(token, tokenSecretKey);
        return isVerifiedUser;
    } catch (error) {
        console.log(error);
        return false;
    }
};
