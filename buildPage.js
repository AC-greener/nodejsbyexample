import postList from './src/postList.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


function formatTitle(variableName) {
  // 分割字符串为单词数组，转换每个单词的首字母为大写，然后再用连字符连接
  return variableName
    .split('-') // 假设原始字符串使用连字符分隔单词
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('-');
}
function generateAstroFile(variableName) {
    const capitalizedVariableName = formatTitle(variableName);
    const content = `---
import BlogLayout from "../layouts/Blog.astro";
import Code from "../examples/${variableName}/${variableName}_code.md";
import Comment from "../examples/${variableName}/${variableName}_comment.md";
import Head from "../examples/${variableName}/${variableName}_combined_comments.md";
---

<BlogLayout title="Nodejs by Example: ${capitalizedVariableName}">
  <span slot="title"> ${capitalizedVariableName}</span>
  <Head slot="head" />
  <Comment slot="comment" />
  <Code slot="code" />
</BlogLayout>
`;

    const filePath = path.join(__dirname, `./src/pages/${variableName}.astro`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File ${filePath} has been generated.`);
}

// 循环遍历postList并为每一项调用generateAstroFile
postList.forEach(post => {
    generateAstroFile(post.url);
});