const parseArgs = () => {
    process.argv.map((item, ind) => {
        if (item.includes('--', 0)) {
            console.log(`${item} is ${process.argv[ind + 1]}`)
        }
    })
};

parseArgs();