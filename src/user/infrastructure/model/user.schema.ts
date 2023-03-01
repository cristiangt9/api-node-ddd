import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        uuid: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("user", UserSchema);

export default UserModel;