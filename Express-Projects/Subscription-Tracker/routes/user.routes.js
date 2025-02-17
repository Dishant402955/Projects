// node modules
import { Router } from "express";
// controllers
import { getUsers, getUser } from "../controllers/user.controller.js";
// middlewares
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  res.send({ Message: "User Created ~~" });
});
userRouter.put("/", (req, res) => {
  res.send({ Message: "User Updated ~~" });
});
userRouter.delete("/", (req, res) => {
  res.send({ Message: "User Deleted ~~" });
});

export default userRouter;
