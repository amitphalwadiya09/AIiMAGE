import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false,
        status,
        message
    });
});

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Run is successful"
    });
});

app.use("/api/post",PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

const connectDB = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const startServer = async () => {
    try {
        await connectDB();
        app.listen(8080, () => console.log("Server is running on port 8080"));
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

startServer();
