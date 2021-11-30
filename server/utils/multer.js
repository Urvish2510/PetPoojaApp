// import multer from "multer";
// import Datauri from "datauri";
// import path from "path";
// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single("image");
// const dUri = new Datauri();
// /**
//  * @description This function converts the buffer to data url
//  * @param {Object} req containing the field object
//  * @returns {String} The data url from the string buffer
//  */
// const dataUri = (req) =>
//   dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
// export { multerUploads, dataUri };

const multer = require("multer");
const path = require("path");
// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
