const genCustomId = ({lengthOfId, prefix = '', suffix = '', useLetters = true, useNumbers = true, useSplChars = false, useTimeStamp = false}) => {
    
    //validations
    // if length is less than 5
    if (lengthOfId < 5) {
        throw new Error('Length of ID should have at least 5 characters for uniqueness.');
    }

    // if length is less than length of (prefix + suffix + 5)
    if (lengthOfId < (prefix.length + suffix.length)) {
        throw new Error('Length of ID must be greater than length of suffix and prefix.');
    }

    // if prefix or suffix contains special characters, throw an error
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharRegex.test(prefix) || specialCharRegex.test(suffix)) {
        throw new Error('Prefix and suffix cannot contain special characters.');
    }

    // At least one source must be selected
    if (!useLetters && !useNumbers && !useSplChars && !useTimeStamp) {
        throw new Error('At least one of useLetters, useNumbers, useSplChars, or useTimeStamp must be selected.');
    }

    // can't use only special characters
    if (useSplChars && !useLetters && !useNumbers && !useTimeStamp) {
        throw new Error('Special characters cannot be used alone. Please enable letters or numbers or timestamp.');
    }

    // can't use only timestamp
    if (useTimeStamp && !useLetters && !useNumbers && !useSplChars) {
        throw new Error('Timestamp cannot be used alone. Please enable letters or numbers or special characters.');
    }

    // safe special characters to use in ID Hyphen (-), Underscore (_), Period (.), Tilde (~)    
    const specialCharacters = '-_.~';

    // use smallcase letters only to avoid confusion between letters and numbers (like O and 0, I and 1)
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const timestampCharacters = Date.now().toString();

    let characters = '';
    if (useLetters) characters += letters;
    if (useNumbers) characters += numbers;
    if (useSplChars) characters += specialCharacters;
    if (useTimeStamp) characters += timestampCharacters;

    // If no characters are selected, throw an error
    if (characters.length === 0) {
        throw new Error('At least one of useLetters, useNumbers, useSplChars, or useTimeStamp must be selected.');
    }

    // Generate the random ID based on the specified length and character set
    let result = '';
    for (let i = 0; i < lengthOfId; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    if (useTimeStamp) {
        const timestampChars = timestampCharacters;
        if (!result.split('').some(char => timestampChars.includes(char))) {
            const timestampChar = timestampChars[Math.floor(Math.random() * timestampChars.length)];
            const insertIndex = Math.floor(Math.random() * result.length);
            result = result.slice(0, insertIndex) + timestampChar + result.slice(insertIndex + 1);
        }
    }

    return `${prefix}${result}${suffix}`;
};

export default genCustomId;



// TESTING purpose only
// let x = genCustomId({
//     lengthOfId: 20,
//     prefix: 'user_',
//     suffix: '',
//     useLetters: true,
//     useNumbers: true,
//     useSplChars: true
// })


// console.log(x);