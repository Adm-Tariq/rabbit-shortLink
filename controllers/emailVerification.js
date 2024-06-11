import express from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'

// modules
import userSchema from "../modules/user.modules.js"
import validationCodeSchema from "../modules/validationCode.js"
import sendCode from "../util/SendCodeValidation.js"

const emailVerification = async (req, res) => {

    const { verifyCode } = req.body
    const { currentUser } = req.cookies

    // if (!currentUser) return res.status(400).json({ status: "fill", message: "Please log in" })

    try {
        let decoded = jwt.verify(currentUser, process.env.SECRET_KEY)
        const foundUser = await userSchema.findOne({ _id: decoded.u_id })
        if (!foundUser) return res.status(400).json({ status: "fill", message: "Non-existent account" })
        if (foundUser.valid) return res.status(200).json({ status: "success", message: "The account has already been activated" })


        if (verifyCode === "") {
            sendCode(decoded.u_id)
            return res.status(200).json({ status: "success", message: "Activation code sent " })
        }

        const foundVerifyCode = await validationCodeSchema.findOne({ user_id: decoded.u_id })
        if (!foundVerifyCode) return res.status(400).json({ status: "fill", message: "Please reload the page and try again" })
        if (foundVerifyCode.verificationCode !== verifyCode) return res.status(400).json({ status: "fill", message: "Wrong activation code" })
        const updateUser = await userSchema.findOneAndUpdate({ _id: decoded.u_id }, { valid: true })
        return res.status(200).json({ status: "success", message: "Account successfully activated" })

    } catch (error) {
        return res.status(400).json({ status: "fill", message: "Please log in" })
    }

}

export default emailVerification