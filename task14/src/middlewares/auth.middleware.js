import { findUserById } from "../services/auth.service.js";
import { verifyToken } from "../utils/tokens.js";

//middleware for check user has authenticated, verify his auth token
export const isAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            message: "your are not authenticated !"
        });
    }
    const verified = verifyToken(token);
    if (!verified) {
        return res.status(500).json({
            message: "user not found !"
        });
    }
    const user = await findUserById(verified._id);
    req.user = user;
    next();
};

export const isAdmins = async (req, res, next) => {
    const user = req.user;
    if (user.role !== "ADMINS") {
        return res.status(401).json({
            message:
                "your not able to add article, please create an channel account"
        });
    }
    next();
};
