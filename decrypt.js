import { pbkdf2Sync, createDecipheriv } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';

function decryptVideo(inputPath, outputPath, password) {
  const input = createReadStream(inputPath);
  const output = createWriteStream(outputPath);

  const iv = Buffer.alloc(16);
  input.read(iv);


  const key = pbkdf2Sync(password, 'salt', 100000, 32, 'sha256');

  const decipher = createDecipheriv('aes-256-cbc', key, iv);

  input.pipe(decipher).pipe(output);

  output.on('finish', () => {
    console.log('Decryption complete.');
  });
}


const encryptedVideo = 'encrypted.enc';  
const decryptedVideo = 'decrypted.mp4';  
const password = 'ash123456';  

decryptVideo(encryptedVideo, decryptedVideo, password);
