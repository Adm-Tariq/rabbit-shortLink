import isEmail from "validator/lib/isEmail.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import 'dotenv/config'

// utility
import Password_check from "../util/Password_check.js"
import isEmptyInput from "../util/isEmptyInput.js"

// modules
import userSchema from "../modules/user.modules.js"
import sendCode from "../util/SendCodeValidation.js"

const register = async (req, res) => {
    const { name, email, password, re_password } = req.body

    if (await isEmptyInput(req.body)) return res.status(400).json({ status: "fill", message: await isEmptyInput(req.body) })
    if (!isEmail(email)) return res.status(400).json({ status: "fill", message: "You must enter a valid email address" })
    if (await Password_check(password, re_password)) return res.status(400).json({ status: "fill", message: await Password_check(password, re_password) })

    const foundUser = await userSchema.findOne({ email: email })
    if (foundUser) return res.status(400).json({ status: "fill", message: "Email address already used" })

    let hashPassword = await bcrypt.hash(password, 10);
    const createUser = await userSchema.create({ name, email, password: hashPassword })

    let token = jwt.sign({ u_id: createUser._id }, process.env.SECRET_KEY);

    const cookieConfig = {
        httpOnly: true, // to disable accessing cookie via client side js
        secure: false, // to force https (if you use it)
        maxAge: 1000 * 60 * 60 * 24 * 30, // ttl in seconds (remove this option and cookie will die when browser is closed)
        signed: false // if you use the secret with cookieParser
    };

    res.cookie("currentUser", token, cookieConfig);
    res.status(201).json({ status: 'success', message: { name: createUser.name, email: createUser.email } })
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (await isEmptyInput(req.body)) return res.status(400).json({ status: "fill", message: await isEmptyInput(req.body) })
    if (!isEmail(email)) return res.status(400).json({ status: "fill", message: "You must enter a valid email address" })

    const foundUser = await userSchema.findOne({ email: email })
    if (!foundUser) return res.status(400).json({ status: "fill", message: "Email or Password is Wrong" })

    const comparePassword = await bcrypt.compare(password, foundUser.password)
    if (!comparePassword) return res.status(400).json({ status: "fill", message: "Email or Password is Wrong" })

    let token = jwt.sign({ u_id: foundUser._id }, process.env.SECRET_KEY);
    const cookieConfig = {
        httpOnly: true, // to disable accessing cookie via client side js
        secure: false, // to force https (if you use it)
        maxAge: 1000 * 60 * 60 * 24 * 30, // ttl in seconds (remove this option and cookie will die when browser is closed)
        signed: false // if you use the secret with cookieParser
    };

    res.cookie("currentUser", token, cookieConfig);
    res.status(200).json({ status: 'success', message: { name: foundUser.name, email: foundUser.email } })
}

const logout = async (req, res) => {
    res.clearCookie('currentUser');
    res.status(200).json({ status: 'success', message: "logout Success" })
}

export { register, login, logout }