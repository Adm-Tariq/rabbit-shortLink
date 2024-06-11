import mongoose from "mongoose";

const validationCodeSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    verificationCode: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("validationCode", validationCodeSchema)