import {spawn, fork} from 'child_process'

const dir = import.meta.dirname

const spawnChildProcess = async (args) => {
    fork(`${dir}/files/script.js`, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['one', 'two']);
