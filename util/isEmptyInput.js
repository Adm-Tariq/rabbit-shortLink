
import validator from 'validator';

const isEmptyInput = async (inputValue) => {
    let emptyInput = []
    let message = ""
    const arrayData = Object.entries(inputValue);
    for (let i = 0; i < arrayData.length; i++) {
        const isEmpty = validator.isEmpty(arrayData[i][1]);
        if (isEmpty) {
            emptyInput.push(arrayData[i][0])
        }
    }

    let len = emptyInput.length
    for (let i = 0; i < len; i++) {
        let index = emptyInput.indexOf(emptyInput[len - 1]);
        if (i < index) {
            message += emptyInput[i] + " , "
        }
    }

    message = `These fields cannot be left blank: ${message}${emptyInput[len - 1]}`
    if (emptyInput[0]) {
        return message
    } else {
        return false
    }
}

export default isEmptyInput