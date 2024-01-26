import fs from 'fs'

const dir = import.meta.dirname;

const write = async () => {
    const writeStream = fs.createWriteStream(`${dir}/files/fileToWrite.txt`)
    process.stdin.on('data', chunk => {
        writeStream.write(chunk)
    })
};

await write();
