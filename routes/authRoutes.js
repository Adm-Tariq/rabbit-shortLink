import express from "express"

import { login, logout, register } from "../controllers/authController.js"
import emailVerification from "../controllers/emailVerification.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)

router.route("/verify").post(emailVerification)

export default router