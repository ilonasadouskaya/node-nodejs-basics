import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    const resource = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const destination = fs.createWriteStream('src/zip/files/archive.gz');

    const compress = createGzip();
    pipeline(resource, compress, destination, (err) => console.error(err));
};

await compress();
