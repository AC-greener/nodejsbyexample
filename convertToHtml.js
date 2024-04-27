const fs = require("fs");
const path = require("path");

// 从命令行参数中接收JS文件名的基本部分
const jsFileBaseName = process.argv[2];
if (!jsFileBaseName) {
  console.error("请提供一个JS文件基本名字作为参数（不包含.js扩展）");
  process.exit(1);
}

// 完整的JS文件路径
const jsFileName = `./src/examples/${jsFileBaseName}/${jsFileBaseName}.js`;
// 生成HTML文件的完整路径
const htmlFilePath = path.join("./src/pages", `${jsFileBaseName}.html`);

// 删除可能存在的同名HTML文件
if (fs.existsSync(htmlFilePath)) {
  fs.unlinkSync(htmlFilePath);
}

// 读取JS文件
fs.readFile(jsFileName, "utf8", (err, data) => {
  if (err) {
    console.error("读取文件时发生错误:", err);
    return;
  }

  // 按行分割文件以便逐行处理
  const lines = data.split("\n");
  // console.log(lines);
  let htmlContent = "";
  let currentComment = "";
  // 初始化二维数组和当前段落（子数组）
  let sections = [];
  let currentSection = [];

  // 处理每一行
  lines.forEach((line) => {
    if (line.trim() === "") {
      // 如果是空行，且当前段落（子数组）不为空，则添加到二维数组中
      if (currentSection.length > 0) {
        sections.push(currentSection);
        currentSection = []; // 开始新的段落（子数组）
      }
    } else {
      // 非空行，加入当前段落中
      currentSection.push(line);
    }
  });

  // 不要遗漏文件最后一个段落（如果存在）
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  // 在这里可以对二维数组 `sections` 进行进一步处理
  // 例如打印出来检查格式是否正确
  console.log(sections);
  console.log(22);

  const processedSections = sections.map((section) => {
    // 分别用于收集注释和代码的数组
    let commentArray = [];
    let codeArray = [];

    // 遍历子数组中的每一行
    section.forEach((line) => {
      if (line.trim().startsWith("//")) {
        // 如果是注释，去掉'//'，并且添加到注释数组
        commentArray.push(line.trim());
      } else {
        // 否则，作为代码添加到代码数组
        codeArray.push(line);
      }
    });
    // 如果 code 长度小于 comment 长度，向 code 数组填充 'empty code'
    while (commentArray.length > codeArray.length) {
      codeArray.push("empty code");
    }
    // 检查如果code长度大于comment长度，在comment数组中填充空字符串
    while (codeArray.length > commentArray.length) {
      commentArray.push("empty comment");
    }

    // 构建section对象，返回
    return {
      comment: commentArray,
      code: codeArray,
    };
  });

  // 输出结果或进行其它操作
  console.log(processedSections);
  let htmlOutput = ''
  processedSections.forEach((section, groupIndex) => {
    // 开始一个新的 group
    htmlOutput += `<div class="group">\n`;
  
    // 每一对 comment 和 code 创建一个 row
    section.comment.forEach((comment, rowIndex) => {
      const codeLine = section.code[rowIndex]; // 用索引获取对应的代码行
  
      // 添加 row 到 group 中
      htmlOutput += `  <div class="row">\n`;
      htmlOutput += `    <div class="comment-${rowIndex}">${comment}</div>\n`;
      htmlOutput += `    <div class="code-${rowIndex}">${codeLine}</div>\n`;
      htmlOutput += `  </div>\n`;
    });
  
    // 结束当前的 group
    htmlOutput += `</div>\n`;
  });
  
  // 输出 HTML 结果或者用于页面渲染
  console.log(htmlOutput);

  // 用于美化和布局的基本CSS
  const cssStyles = `
  <style>
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .comment-container {
      flex-basis: 50%;
    }
    pre {
      margin: 0;
    }
  </style>
  `;

  // 创建HTML文件的内容
  htmlContent = `${cssStyles}<div class="content-container">${htmlOutput}</div>`;

  // 写入HTML文件
  fs.writeFile(htmlFilePath, htmlContent, "utf8", (err) => {
    if (err) {
      console.error(`写入HTML文件${htmlFilePath}时发生错误:`, err);
      return;
    }
    console.log(
      `已将 ${jsFileName} 的注释和代码转换成基于div布局的HTML格式，并保存到 ${htmlFilePath}`
    );
  });
});
