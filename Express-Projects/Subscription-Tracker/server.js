// node modules
import express from "express";
import cookirParser from "cookie-parser";
// routes
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";
// environment variables
import { PORT } from "./config/env.js";
// database
import connectToDB from "./database/mongodb.js";
// middlewares
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookirParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`\nServer is up and listening on http://localhost:${PORT} ~~\n`);
  await connectToDB();
});
