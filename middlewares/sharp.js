const sharp = require("sharp");

const resizePicture = (req, res, next) => {
     const extension = "webp";
     const name =
          req.file.originalname.split(" ").join("_") +
          Date.now() +
          "." +
          extension;
     console.log(req.file.originalname);
     req.file.filename = name;
     console.log(req.file.filename);
     sharp(req.file.buffer)
          .resize(500, 500, { fit: "inside" })
          .toFormat(extension)
          .toFile("images/" + name);
     next();
};

module.exports = resizePicture;
