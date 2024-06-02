import { randomBytes, pbkdf2Sync, createCipheriv } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';

function encryptVideo(inputPath, outputPath, password) {

  const iv = randomBytes(16);

  const key = pbkdf2Sync(password, 'salt', 100000, 32, 'sha256');


  const cipher = createCipheriv('aes-256-cbc', key, iv);

  const input = createReadStream(inputPath);
  const output = createWriteStream(outputPath);

  
  output.write(iv);

  input.pipe(cipher).pipe(output);

  output.on('finish', () => {
    console.log('Encryption complete.');
  });
}


const inputVideo = 'file-name';  
const encryptedVideo = 'encrypted.enc';  
const password = 'your-password-here';  

encryptVideo(inputVideo, encryptedVideo, password);
