const express = require("express");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");
const router = express.Router();
const ctrlBook = require("../controllers/book");
const resizePicture = require("../middlewares/sharp");

router.use(express.json());
router.get("/", ctrlBook.getBooks);
router.get("/bestrating", ctrlBook.getBestBooks);
router.get("/:id", ctrlBook.getOneBook);
router.post("/", auth.authFunction, multer, resizePicture, ctrlBook.createBook);
router.put(
     "/:id",
     auth.authFunction,
     multer,
     resizePicture,
     ctrlBook.modifyBook
);
router.delete("/:id", auth.authFunction, ctrlBook.deleteBook);
router.post("/:id/rating", auth.authFunction, ctrlBook.rateBook);

module.exports = router;
