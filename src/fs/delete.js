import {unlink} from 'node:fs';

const remove = async () => {
    try {
        unlink('./src/fs/files/fileToRemove.txt', (err) => {
            if (err) {
               throw new Error('FS operation failed')
            }
            console.log('Deleted');
        });
    } catch (e) {
        console.error(e.message)
    }

};

await remove();