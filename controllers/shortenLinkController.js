import isURL from "validator/lib/isURL.js"
import isEmptyInput from "../util/isEmptyInput.js"
import otp from "../util/OTP.js"

import shortenLinkSchema from '../modules/shortenLink.modules.js'


const shortLink = async (req, res) => {
    const { link } = req.body

    if (await isEmptyInput(req.body)) return res.status(400).json({ status: "fill", message: await isEmptyInput(req.body) })
    if (!isURL(link)) return res.status(400).json({ status: "fill", message: "You must enter a valid link" })

    const OTP = await otp(7, true, true);

    try {

        const dataIp = await fetch("https://api.ipify.org/?format=json")
        const ip = await dataIp.json()

        const getGeoLocation = await fetch(`http://ip-api.com/json/${ip.ip}`)
        const geoLocation = await getGeoLocation.json()

        const foundLink = await shortenLinkSchema.findOne({ short_link: OTP })
        if (foundLink) return res.status(400).json({ status: "fill", message: "Please try agin" })
        const createShortLink = await shortenLinkSchema.create({ o_link: link, short_link: OTP, deviceIP: ip.ip, countryCode: geoLocation.countryCode, regionName: geoLocation.regionName })

        res.status(201).json({ status: "success", message: createShortLink })

    } catch (error) {
        return res.status(400).json({ status: "fill", message: error })
    }
}

const redirect = async (req, res) => {
    const { linkId } = req.params
    if (!linkId) return res.status(400).json({ status: "fill", message: "Invalid link, please try again" })

    const foundLink = await shortenLinkSchema.findOne({ short_link: linkId })
    if (!foundLink) return res.status(400).json({ status: "fill", message: "Invalid link, please try again" })

    res.status(201).json({ original_link: foundLink.o_link })
}

export { shortLink, redirect }