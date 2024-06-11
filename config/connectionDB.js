import mongoose from "mongoose";

const url = "mongodb+srv://admtariq11:6W7OzqIqBjEOqgrW@learn-mango-db.mvgfzpu.mongodb.net/shortUrl"

const connectToDB = async () => {
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        return;
    }
}
export default connectToDB
