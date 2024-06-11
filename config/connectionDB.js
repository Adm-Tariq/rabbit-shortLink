import mongoose from "mongoose";

const url = "mongodb://localhost:27017/shortUrl"

const connectToDB = async () => {
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        return;
    }
}
export default connectToDB