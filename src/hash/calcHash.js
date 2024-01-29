import crypto from 'crypto'
import fs from 'node:fs/promises'

const calculateHash = async () => {
    const file = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', ({encoding: 'utf-8'}))
    const hashCalc = crypto.createHash('sha256').update(file).digest('hex')
    console.log(hashCalc)
};

await calculateHash();