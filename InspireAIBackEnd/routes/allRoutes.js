import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  register,
  login,
  logout,
  currentUser,
} from "../controllers/auth";
import {
  predictImage,
} from "../controllers/predict";

import { test_api  } from "../controllers/testAPI";
import { speechToTextJs } from "../controllers/speechToTextJs";
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.post("/predict", requireSignin,predictImage)
router.post("/test",test_api )
router.post("/speechToTextJs", speechToTextJs)


module.exports = router;
