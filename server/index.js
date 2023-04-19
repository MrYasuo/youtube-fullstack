import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// const connect = async () => {
// 	try {
// 		console.log(process.env.MONGO);
// 		await mongoose.connect(process.env.MONGO, {
// 			dbName: "youtube",
// 		});
// 		console.log("Connected to mongoDB");
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// connect();

//middlewares
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello from server");
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//error handler
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "Something went wrong!";
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

app.listen(8800, () => {
	console.log("Connected to Server");
});
