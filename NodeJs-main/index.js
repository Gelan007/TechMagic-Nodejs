const fs = require("fs")
const mostRepeatedLetter = require('most-repeated-letter-techmagic')

const pathToTextFile = process.argv[2];
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('There was a problem reading the file: ' + err))
            }
            resolve(data)
        })
    })
}

async function logMostRepeatedLetter() {
    try {
        if (!pathToTextFile) {
            console.error('Please provide a path to the text file.');
            return;
        }
        const data = await readFile(pathToTextFile)
        console.log(mostRepeatedLetter.findMostRepeatedLetter(data))
    } catch (error) {
        console.error('Error creating output data: ' + error.message)
    }
}

logMostRepeatedLetter()