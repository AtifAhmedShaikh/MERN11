import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            enum: ["USER", "ADMINS"],
            default: "USER"
        },
        about: {
            type: String,
            default: "Hey, i am using newsApp"
        },
        headline: {
            type: String,
            default: "Frontend Developer | React Developers"
        },
        followers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }],
        following: [{ type: mongoose.SchemaTypes.ObjectId, ref: "user" }]
    },
    { timestamps: true }
);
userSchema.pre("save", () => {
    console.log("before saving user in DB ", this);
});

userSchema.post("save", () => {
    console.log("after saving user in DB ", this);
});

userSchema.methods.checkPassword = () => {
    console.log("your function whenever you call it ");
};

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
