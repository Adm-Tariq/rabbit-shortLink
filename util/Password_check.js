import PasswordValidator from "password-validator";

const Password_check = async (password, re_password) => {
    if (password !== re_password) return "Password mismatch"
    var schema = new PasswordValidator();
    schema
        .is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().symbols(1)
        .has().digits(2)
        .has().not().spaces()
        .is().not().oneOf(['Passw0rd', 'Password123']);

    if (!schema.validate(password)) return schema.validate(password, { details: true })
    return false
}
export default Password_check