const fs = require('fs');
const path = require('path');

// 从命令行参数中接收JS文件名的基本部分
const jsFileBaseName = process.argv[2];
if (!jsFileBaseName) {
  console.error('请提供一个JS文件基本名字作为参数（不包含.js扩展）');
  process.exit(1);
}

// 完整的JS文件路径
const jsFileName = `./src/examples/${jsFileBaseName}.js`;
console.log(jsFileName)
const baseFileName = path.basename(jsFileName, '.js');
// 将目标目录和新的文件名组合，生成Markdown文件的完整路径
const markdownFilePath = path.join('./src/pages', `${baseFileName}.md`);
// 检查是否存在同名Markdown文件，并先删除它
if (fs.existsSync(markdownFilePath)) {
  fs.unlinkSync(markdownFilePath);
}

// 读取JS文件
fs.readFile(jsFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误:', err);
    return;
  }

  // 使用正则表达式匹配注释和代码
  const commentRegex = /\/\/\s?(.*)/g;
  const codeRegex = /console\.log\(.*\);/g;

  // 准备提取注释和代码
  const commentsMatch = data.match(commentRegex);
  const codeMatch = data.match(codeRegex);

  // 检查是否找到注释和代码，以避免在转换时出现错误
  const comments = commentsMatch ? commentsMatch.map(line => line.slice(3)).join('\n') : 'No comments found.';
  const code = codeMatch ? codeMatch.join('\n') : 'No code found.';

  // 创建Markdown格式的文本
  const markdownContent = `

${comments}

\`\`\`javascript
${code}
\`\`\`
`;

  // 将Markdown文本写入新文件
  fs.writeFile(markdownFilePath, markdownContent, 'utf8', (err) => {
    if (err) {
      console.error('写入Markdown文件时发生错误:', err);
      return;
    }
    console.log(`已将 ${jsFileName} 转换成Markdown格式，并保存到 ${markdownFilePath}`);
  });
});