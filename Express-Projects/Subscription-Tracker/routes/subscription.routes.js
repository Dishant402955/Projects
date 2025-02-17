import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  updateSubscription,
  deleteSubscription,
  allSubscriptionsOfUser,
  getSubscription,
  getSubscriptions,
} from "../controllers/subscriptions.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", getSubscriptions);
subscriptionRouter.get("/:id", authorize, getSubscription);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", authorize, updateSubscription);
subscriptionRouter.delete("/:id", authorize, deleteSubscription);
subscriptionRouter.get("/user/:id", authorize, allSubscriptionsOfUser);

export default subscriptionRouter;
