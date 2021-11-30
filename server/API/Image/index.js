import express from "express";
import cloudinary from "../../config/cloudinaryConfig";
import upload from "../../utils/multer";

// Models
import { ImageModel } from "../../database/image";

// Create a Router
const Router = express.Router();

Router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
    const Image = new ImageModel({
      location: result.public_id,
      url: result.url,
    });
    // Save user
    await Image.save();
    res.json(Image);
  } catch (err) {
    console.log(err);
  }
});
// module.exports = router;

export default Router;
