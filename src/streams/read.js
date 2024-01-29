import fs from 'fs'

const dir = import.meta.dirname;

const read = async () => {
    const readStream = fs.createReadStream(`${dir}/files/fileToRead.txt`)
    readStream.on('data', chunk => {
        process.stdout.write(chunk)
    })
};

await read();
