import * as fs from 'node:fs/promises'

const read = async () => {
    const filepath = "./src/fs/files/fileToRead.txt"
    try {
        const data = await fs.readFile(filepath, ({encoding: 'utf-8'}))
        console.log(data)
    } catch (e) {
       throw new Error('FS operation failed')
    }
};

await read();