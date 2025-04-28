const parseArgs = () => {
    const [_execPath, _filePath, ...passedArgs] = process.argv
    const parsedArgs = {}

    for (let i = 0; i < passedArgs.length; i++) {
        const propName = passedArgs[i].replace('--', '');
        const propValue = passedArgs[i + 1];

        parsedArgs[propName] = propValue;
        i++
    }

    const result = Object.keys(parsedArgs).map(key => `${key} is ${parsedArgs[key]}` ).join(', ')

    console.log(result)
};

parseArgs();
