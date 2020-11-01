class VigenereCipheringMachine {
    constructor(type) {
        this.reverseType = type === false;
        let firstLetterIndex = 65;
        this.alphabet = new Array(26)
            .fill(1)
            .map((_, i) => String.fromCharCode(firstLetterIndex + i));
    }

    fillKeyToText(key, message) {
        let resultString = '';
        const notAlphabetIndexes = this.getNotAlphabeticalIndexes(message);
        let length = Math.ceil(message.length / key.length);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < key.length; j++) {
                if (resultString.length === message.length) {
                    break;
                }
                const lastIndex = resultString.length;
                if (notAlphabetIndexes.includes(lastIndex) && lastIndex > 0) {
                    resultString += message[lastIndex];
                    j--;
                } else {
                    resultString += key[j];
                }
            }
        }
        return resultString;
    }

    getNotAlphabeticalIndexes(message) {
        let resultString = '';
        message = message.toUpperCase();

        for (let i = 0; i < message.length; i++) {
            if (!this.alphabet.includes(message[i])) {
                resultString += `${i},`;
            }
        }

        return resultString
            .split(',')
            .filter((x) => x)
            .map((x) => +x);
    }

    encrypt(text, key) {
        let encryptedString = '';
        let newKey = this.fillKeyToText(key, text).toUpperCase();
        text = text.toUpperCase();
        for (let i = 0; i < text.length; i++) {
            if (this.alphabet.includes(text[i])) {
                encryptedString += this.alphabet[(newKey[i].charCodeAt(0) + text[i].charCodeAt(0)) % this.alphabet.length];
            } else {
                encryptedString += text[i];
            }
        }
        return this.reverseType 
        ? encryptedString.split('').reverse().join('') 
        : encryptedString;
    }


    decrypt(cipher, key) {
        let decryptedString = '';
        let newKey = this.fillKeyToText(key, cipher).toUpperCase();
        const alphabetLength = this.alphabet.length;
        for (let i = 0; i < cipher.length; i++) {
            if (this.alphabet.includes(cipher[i])) {
                decryptedString += this.alphabet[(cipher[i].charCodeAt(0) - newKey[i].charCodeAt(0) + alphabetLength) % alphabetLength];
            } else {
                decryptedString += cipher[i];
            }
        }
        return this.reverseType 
        ? decryptedString.split('').reverse().join('') 
        : decryptedString;
        
    }
}

module.exports = VigenereCipheringMachine;