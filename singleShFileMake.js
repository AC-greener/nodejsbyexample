import executeScriptAndSaveOutput from "./executeScriptAndSaveOutput.js";
// 从命令行参数获取fileName
const fileName = process.argv[2];

if (fileName) {
  executeScriptAndSaveOutput(fileName);
}