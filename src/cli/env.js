const envStartsWith = 'RSS_';

const parseEnv = () => {
    const filteredEnvVars = Object.keys(process.env).filter(key => key.startsWith(envStartsWith));
    const result = filteredEnvVars.map(key => `${key}=${process.env[key]}`).join(';');

    console.log(result)
};

parseEnv();
