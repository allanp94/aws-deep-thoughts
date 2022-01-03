const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: "user-images-026a152d-fb10-4dba-9b15-7e49c308067a",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read",
  };

  return imageParams;
};

module.exports = params;
