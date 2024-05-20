import fs from "fs/promises";
import { exec } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function executeScriptAndSaveOutput(fileName) {
  const jsFileName = `./src/examples/${fileName}/${fileName}.js`;
  const txtFilePath = join(
    __dirname,
    `./src/examples/${fileName}/${fileName}.sh`
  );
  const mdFilePath = join(
    __dirname,
    `./src/pages/${fileName}/${fileName}_output.md`
  );
  exec(`node ${jsFileName}`, async (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error}`);
      return;
    }

    // const shebangLine = `#!/usr/bin/env node\n`;
    const runCommand = `$ node ${fileName}.js\n`;
    // stderr如果有输出，也添加到文件中
    const output =
      runCommand + stdout + (stderr ? "\nError Output:\n" + stderr : "");
    const markdownContent = `\`\`\`shell
$ node ${fileName}.js
${stdout}${stderr ? "\nError Output:\n" + stderr : ""}
\`\`\`
`;
    try {
      await fs.writeFile(txtFilePath, output);
      console.log(`The output has been saved to ${txtFilePath}`);
    } catch (err) {
      console.error(`Write file error: ${err}`);
    }

    try {
      // 将构造后的 Markdown 内容写入到指定的 Markdown 文件
      await fs.writeFile(mdFilePath, markdownContent);
      console.log(`The output has been saved to ${mdFilePath}`);
    } catch (err) {
      console.error(`Write file error: ${err}`);
    }
  });
}

export default executeScriptAndSaveOutput;
