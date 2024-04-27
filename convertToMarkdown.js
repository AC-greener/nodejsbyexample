const fs = require('fs');
const path = require('path');

// 从命令行参数中接收JS文件名的基本部分
const jsFileBaseName = process.argv[2];
if (!jsFileBaseName) {
  console.error('请提供一个JS文件基本名字作为参数（不包含.js扩展）');
  process.exit(1);
}

// 完整的JS文件路径
const jsFileName = `./src/examples/${jsFileBaseName}/${jsFileBaseName}.js`;
const baseFileName = path.basename(jsFileName, '.js');
// 分别生成代码和注释的Markdown文件的完整路径
const codeMarkdownFilePath = path.join('./src/pages', `${baseFileName}_code.md`);
const commentMarkdownFilePath = path.join('./src/pages', `${baseFileName}_comment.md`);

// 删除可能存在的同名Markdown文件
[commentMarkdownFilePath, codeMarkdownFilePath].forEach(filepath => {
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
});

// 读取JS文件
fs.readFile(jsFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误:', err);
    return;
  }

  // 按行分割文件以便逐行处理
  const lines = data.split('\n');

  // 分别用于累积代码和注释的数组
  let comments = [];
  let codes = [];
  lines.forEach(line => {
    if (line.trim().startsWith('//')) {  // 判断是否为注释行并在末尾加两个空格
      comments.push(line.replace(/\/\//, '').trim() + '  \n'); // 在每条注释后面添加两个换行符
    } else {
      codes.push(line);
    }
  });

  // 将数组转换为字符串，用换行符连接，保留了原始的空行
  const commentsContent = comments.join('\n');
  const codeContent = `\`\`\`javascript\n${codes.join('\n')}\n\`\`\``;
  // const codeContent = `\`\`\`javascript${codes.join('\n')}\n\`\`\``;
  // 分别将代码和注释的 Markdown 文本写入新文件
  fs.writeFile(commentMarkdownFilePath, commentsContent, 'utf8', (err) => {
    if (err) {
      console.error(`写入Markdown文件${commentMarkdownFilePath}时发生错误:`, err);
      return;
    }
    console.log(`已将 ${jsFileName} 的注释转换成Markdown格式，并保存到 ${commentMarkdownFilePath}`);
  });

  fs.writeFile(codeMarkdownFilePath, codeContent, 'utf8', (err) => {
    if (err) {
      console.error(`写入Markdown文件${codeMarkdownFilePath}时发生错误:`, err);
      return;
    }
    console.log(`已将 ${jsFileName} 的代码转换成Markdown格式，并保存到 ${codeMarkdownFilePath}`);
  });
});