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
app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Error");
    }
    res.end("Done.");
  });
});

app.get("/parouimpar", (req, res) => {
  //req.body
  //req.query
  //req.params
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "Par" : "impar",
  });
});

app.listen(8080, () => console.log("running..."));
