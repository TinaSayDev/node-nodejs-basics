const parseEnv = () => {
    const bar = process.env.RSS_bar; //baz
    const foo = process.env.RSS_foo; //bar

    const obj = process.env;

    function getKeyByValue(object, val) {
        return Object.keys(object).find(key => object[key] === val);
    }

    const bar_key = getKeyByValue(obj, bar);
    const foo_key = getKeyByValue(obj, foo);

    console.log(`${foo_key}=${foo}; ${bar_key}=${bar}`)
};

parseEnv();