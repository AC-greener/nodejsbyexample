import postList from './src/postList.js'
import converToMd from './convertToMarkdown.js'
// 循环遍历postList并为每一项调用generateAstroFile
postList.forEach(post => {
  converToMd(post.url);
});