import fs from "fs";
import path from "path";
import executeScriptAndSaveOutput from "./executeScriptAndSaveOutput.js";

const examplesDir = "./src/examples";

// 使用异步函数来处理异步操作
async function executeScriptsInDirectory(directory) {
  try {
    const categories = await fs.promises.readdir(directory, {
      withFileTypes: true,
    });
    console.log("categories", categories);
    for (const category of categories) {
      if (category.isDirectory()) {
        const categoryPath = path.join(directory, category.name);
        const scripts = await fs.promises.readdir(categoryPath);

        // 过滤出.js文件
        for (const script of scripts) {
          if (path.extname(script) === ".js") {
            const scriptPath = path.join(categoryPath, script);
            const scriptName = path.basename(scriptPath, ".js");

            console.log(`Executing script: ${scriptName}`);
            executeScriptAndSaveOutput(scriptName);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error executing scripts:", error);
  }
}

executeScriptsInDirectory(examplesDir);
