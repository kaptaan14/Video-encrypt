# Installation

```bash
npm install videocryptor
```

## Getting Started

To use **video-cryptor**, you need to import it into your Node.js project:

```javascript
import videoCryptor from "videocryptor";
const video = new VideoCryptor();
```

### Usage

To encrypt a video, you'll need the path to the video file, an encryption key, and the desired output file path. Here's how to use the library to encrypt a video:

```javascript
const videoPath = "./demo.mp4";
const encryptionKey = "your-secret-key";
const encryptedFilePath = "encrypted-video";
video.videoEncrypt(videoPath, encryptionKey, encryptedFilePath);
```

## Decrypting an Encrypted Video

### Usage

To decrypt an encrypted video, you'll need the path to the encrypted video file, the encryption key used for encryption, and the desired output file path. Here's how to use the library to decrypt an encrypted video:

```javascript
const encryptedFilePath = "encrypted-video";
const encryptionKey = "your-secret-key";
const decryptedVideoPath = "decrypted-video";
video.videoDecrypt(encryptedFilePath, encryptionKey, decryptedVideoPath);
```

## Author

Ashish Singh ([GitHub](https://github.com/kaptaan14))
