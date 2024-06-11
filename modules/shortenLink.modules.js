import mongoose from "mongoose";

const shortenLinkSchema = new mongoose.Schema({
    o_link: {
        type: String,
        required: true
    },
    short_link: {
        type: String,
        required: true
    },
    u_id: {
        type: String,
        default: "0"
    },
    deviceIP: {
        type: String,
        required: true
    }, countryCode: {
        type: String,
        required: true
    }, regionName: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("shorten", shortenLinkSchema)