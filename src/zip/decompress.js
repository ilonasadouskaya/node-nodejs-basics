import fs from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const resource = fs.createReadStream('src/zip/files/archive.gz');
    const destination = fs.createWriteStream('src/zip/files/fileToCompress.txt');

    const decompress = createGunzip();
    pipeline(resource, decompress, destination, (err) => console.error(err));
};

await decompress();
