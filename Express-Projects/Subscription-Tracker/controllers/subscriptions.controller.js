import Subscription from "../models/subscription.model.js";

const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
      password: req.user.password,
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

const updateSubscription = async (req, res, next) => {};

const deleteSubscription = async (req, res, next) => {};

const allSubscriptionsOfUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("Unauthorized");
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(e);
  }
};

const getSubscription = async (req, res, next) => {
  try {
    if (!req.params.id) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }

    const subscription = await Subscription.find({ _id: req.params.id });
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(e);
  }
};

const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find({});
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(e);
  }
};

export {
  createSubscription,
  updateSubscription,
  deleteSubscription,
  allSubscriptionsOfUser,
  getSubscription,
  getSubscriptions,
};
