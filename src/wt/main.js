import {Worker, isMainThread} from 'worker_threads'
import {cpus} from 'os'

const dir = import.meta.dirname;
const num = 6;
const workersNum = cpus().length;
let incremental = 10;

const workerCreator = async (number) => {

    return new Promise((resolve, reject) => {

        const worker = new Worker(`${dir}/worker.js`, {
            workerData: number
        })

        worker.on('message', msg => {
            resolve(msg)
        });

        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });

    });
}
const performCalculations = async () => {

    const promises = [];
    for (let i = 0; i < workersNum; i++) {
        promises.push(workerCreator(incremental))
        incremental += 1;
    }


    Promise.allSettled(promises)
        .then((results) =>
            results.forEach((result) => {
                if (result.status === 'fulfilled') {
                    console.log({
                        status: 'resolved',
                        data: result.value
                    })
                }

                if (result.status === 'rejected') {
                    console.log({
                        status: 'rejected',
                        data: null
                    })
                }

            }),
        )
        .catch(err => console.error(err));

};

await performCalculations();