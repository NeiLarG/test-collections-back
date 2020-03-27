const imageRepository = require('../repositories/image.repository');
const { bucket } = require('../config/gcloud');

module.exports.uploadImage = async (req, res) => {
  try {
    const { file } = req;
    if (file) {
      const url = await uploadImageToStorage(file);
      const image = await imageRepository.createImage({
        link: url,
      });
      res.status(200).json({ image });
    }
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};

const uploadImageToStorage = (file) => new Promise((resolve, reject) => {
  if (!file) {
    reject('No image file');
  }
  const newFileName = `${file.originalname}_${Date.now()}`;

  const fileUpload = bucket.file(newFileName);

  const blobStream = fileUpload.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  blobStream.on('error', (error) => {
    reject('Something is wrong! Unable to upload at the moment.');
  });

  blobStream.on('finish', () => {
    const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media&token=${process.env.FIREBASE_READ_TOKEN}`;
    resolve(url);
  });

  blobStream.end(file.buffer);
});
