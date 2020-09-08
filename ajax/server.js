const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/formulario");
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Error");
    }
    res.end("Done.");
  });
});
app.listen(8080, () => console.log("running..."));
