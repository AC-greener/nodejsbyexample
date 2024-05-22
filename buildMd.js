// 根据postList生成/pages/xxx/*.md文件
import postList from './src/postList.js'
import converToMd from './convertToMarkdown.js'
// 循环遍历postList并为每一项调用convertToMarkdown
postList.forEach(post => {
  converToMd(post.url);
});