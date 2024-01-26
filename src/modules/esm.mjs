import path from 'path'
const filename = import.meta.filename;
const dirname = import.meta.dirname;
import {release,version} from 'os'
import a from './files/a.json' assert { type: "json" };
import b from './files/b.json' assert { type: "json" };
import { sayHello } from "./files/c.js";
import { createServer as createServerHttp } from "http";

sayHello()

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

