import express from "express";

const router = express.Router();
//Get all users list
router.get("/all", async (req, res) => {
    res.status(200).json({ message: "welcome Index of users all" });
});
//Get one specific user profile
router.get("/profiles/:id", async (req, res) => {
    res.status(200).json({
        message: "welcome id router of users /profiles/:id"
    });
});

export default router;
