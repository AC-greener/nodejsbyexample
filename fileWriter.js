// fileWriter.js
import fs from 'fs'
function writeMarkdownFile(filePath, content, successMessage, errorMessage) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(errorMessage, err);
    } else {
      console.log(successMessage);
    }
  });
}

export default writeMarkdownFile