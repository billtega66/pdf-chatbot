const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("pdf"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  // Process the PDF file here (e.g., using pdf-lib or pdf-parse)
  // For simplicity, we'll just return a success message

  res.send({ message: "PDF file processed successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
