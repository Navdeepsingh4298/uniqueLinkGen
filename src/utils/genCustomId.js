const genCustomId = ({lengthOfId, prefix = '', suffix = '', useLetters = true, useNumbers = true}) => {
    
    //validations
    // if length is less than 5
    if (lengthOfId < 5) {
        throw new Error('Length of ID should have at least 5 characters for uniqueness.');
    }

    // if length is less than length of (prefix + suffix + 5)
    if (lengthOfId < (prefix.length + suffix.length)) {
        throw new Error('Length of ID must be greater than length of suffix and prefix.');
    }

    // useLetters and useNumbers both are false
    if (!useLetters && !useNumbers) {
        throw new Error('At least one of useLetters or useNumbers must be true.');
    }
    
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let characters = '';
    if (useLetters) characters += letters;
    if (useNumbers) characters += numbers;

    if (characters.length === 0) {
        throw new Error('At least one of useLetters or useNumbers must be true.');
    }


    // Generate the random ID based on the specified length and character set
    let result = '';
    for (let i = 0; i < lengthOfId; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return `${prefix}${result}${suffix}`;
};

export default genCustomId;
