import postList from './src/postList.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件所在目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function formatTitle(variableName) {
  return variableName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('-');
}

// 创建目录
function makePageDir(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  makePageDir(dirname);
  fs.mkdirSync(dirname);
}

function generateAstroFile(variableName) {
    const capitalizedVariableName = formatTitle(variableName);
    const dirPath = path.join(__dirname, `./src/pages/${variableName}`);
    const filePath = path.join(dirPath, `index.astro`);

    makePageDir(filePath);

    const content = `---
import BlogLayout from "../../layouts/Blog.astro";
import Code from "../../examples/${variableName}/${variableName}_code.md";
import Comment from "../../examples/${variableName}/${variableName}_comment.md";
import Head from "../../examples/${variableName}/${variableName}_combined_comments.md";
---

<BlogLayout title="Nodejs by Example: ${capitalizedVariableName}">
  <span slot="title"> ${capitalizedVariableName}</span>
  <Head slot="head" />
  <Comment slot="comment" />
  <Code slot="code" />
</BlogLayout>
`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File ${filePath} has been generated.`);
}

// 循环遍历postList并为每一项调用generateAstroFile
postList.forEach(post => {
    generateAstroFile(post.url);
});