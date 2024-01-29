import fs from "fs";
import zlib from 'node:zlib'

const dir = import.meta.dirname;

const decompress = async () => {
        fs.createReadStream(`${dir}/files/archive.gz`)
            .pipe(zlib.createUnzip())
            .pipe(fs.createWriteStream(`${dir}/files/fileToCompress.txt`));
    console.log('unziped')

};

await decompress();