import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const fileContent = await readFile('src/hash/files/fileToCalculateHashFor.txt');

    const result = createHash('sha256')
        .update(fileContent)
        .digest('hex');

    console.log(result);
};

await calculateHash();
