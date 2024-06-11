import express from "express"
import { redirect, shortLink } from "../controllers/shortenLinkController.js"


const router = express.Router()

router.route("/short_link").post(shortLink)
router.route("/redirect").post(redirect)
router.route("/redirect/:linkId").post(redirect)


export default router