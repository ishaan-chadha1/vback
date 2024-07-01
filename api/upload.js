const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Setting up multer to store files temporarily in memory
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const uploader = req.body.uploader || "Miyagi Labs";
  const file = req.file;
  const filePath = path.join("/tmp", file.originalname); // Using temporary storage
  const uploaderInfo = { uploader, filePath };

  // Example: Simulating saving file info. Replace with actual cloud storage upload code
  console.log("File uploaded and info saved:", uploaderInfo);

  res.status(200).send("File uploaded successfully.");
};
