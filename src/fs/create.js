import * as fs from 'node:fs/promises'

const create = async () => {
    const filepath = "./src/fs/files/fresh.txt"
    const content = 'I am fresh and young';
    try {
        await fs.writeFile(filepath, content, {flag: 'ax+'});
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();