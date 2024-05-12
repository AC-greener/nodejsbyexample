// fileWriter.js
const fs = require("fs");

function writeMarkdownFile(filePath, content, successMessage, errorMessage) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(errorMessage, err);
    } else {
      console.log(successMessage);
    }
  });
}

module.exports = writeMarkdownFile;