import {
  randomBytes,
  pbkdf2Sync,
  createCipheriv,
  createDecipheriv,
} from "crypto";
import { createReadStream, createWriteStream, readFileSync } from "fs";

class VideoCryptor {
  constructor() {}

  videoEncrypt(inputPath, outputPath, password) {
    const iv = randomBytes(16);

    const key = pbkdf2Sync(password, "salt", 100000, 32, "sha256");

    const cipher = createCipheriv("aes-256-cbc", key, iv);

    const input = createReadStream(inputPath);
    const output = createWriteStream(outputPath);

    output.write(iv);

    input.pipe(cipher).pipe(output);

    output.on("finish", () => {
      console.log("Encryption complete.");
    });
  }

  videoDecrypt = (inputPath, outputPath, password) => {
    const fileContent = readFileSync(inputPath);
    const iv = fileContent.subarray(0, 16);
    const key = pbkdf2Sync(password, "salt", 100000, 32, "sha256");
    const decipher = createDecipheriv("aes-256-cbc", key, iv);
    const input = createReadStream(inputPath, { start: 16 });
    const output = createWriteStream(outputPath);

    input.pipe(decipher).pipe(output);

    output.on("finish", () => {
      console.log("Decryption complete.");
    });

    output.on("error", (err) => {
      console.error("Decryption error:", err);
    });
  };
}

export default VideoCryptor;
