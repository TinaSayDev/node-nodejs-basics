import { rename as newname } from 'node:fs';

const rename = async () => {
        await newname('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
            if (err) throw new Error('FS operation failed');
            console.log('Rename complete!');
        });
};

await rename();