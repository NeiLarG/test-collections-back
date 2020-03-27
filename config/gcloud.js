const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: process.env.FIREBASE_PROJECT_ID,
  keyFilename: process.env.FIREBASE_KEY_FILENAME,
});

module.exports.bucket = storage.bucket(process.env.FIREBASE_STORAGE_BUCKET);
