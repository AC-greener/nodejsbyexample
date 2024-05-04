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
const commentsMDFilePath = path.join(`./src/examples/${jsFileBaseName}`, `${jsFileBaseName}_comment.md`);
const codeMDFilePath = path.join(`./src/examples/${jsFileBaseName}`, `${jsFileBaseName}_code.md`);

// 读取JS文件
fs.readFile(jsFileName, "utf8", (err, data) => {
  if (err) {
    console.error("读取文件时发生错误:", err);
    return;
  }

  // 按行分割文件以便逐行处理
  const lines = data.split("\n");
  // console.log(lines);
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
  
    // 如果代码行数小于注释行数，向代码数组填充占位的div
    while (commentArray.length > codeArray.length) {
      codeArray.push('  ');
    }
    // 检查如果代码行数大于注释行数，在注释数组中填充占位的div
    while (codeArray.length > commentArray.length) {
      commentArray.push('<div style="min-height: 24px;"></div>');
    }

    // 构建section对象，返回
    return {
      comment: commentArray,
      code: codeArray,
    };
  });

  // 提取注释和代码到各自的Markdown字符串
  let commentsMDString = "";
  let codeMDString = "";

  processedSections.forEach((section) => {
    section.comment.forEach((comment) => {
      commentsMDString += comment.replace("// ", "") + "\n\n";
    });
    section.code.forEach((codeLine) => {
      codeMDString += "```javascript\n" + codeLine + "\n```\n\n";
    });
  });

  // 将注释和代码写入到对应的Markdown文件
  fs.writeFile(commentsMDFilePath, commentsMDString, "utf8", (err) => {
    if (err) {
      console.error(`写入Markdown文件${commentsMDFilePath}时发生错误:`, err);
      return;
    }
    console.log(`注释已保存到 ${commentsMDFilePath}`);
  });

  fs.writeFile(codeMDFilePath, codeMDString, "utf8", (err) => {
    if (err) {
      console.error(`写入Markdown文件${codeMDFilePath}时发生错误:`, err);
      return;
    }
    console.log(`代码已保存到 ${codeMDFilePath}`);
  });
});
