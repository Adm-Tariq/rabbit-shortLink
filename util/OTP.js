import otpGenerator from 'otp-generator'

const otp = async (length, upperCase, lowerCase) => {
    let otpNumber = await otpGenerator.generate(length, { upperCaseAlphabets: upperCase, lowerCaseAlphabets: lowerCase, specialChars: false });
    return otpNumber
}

export default otp