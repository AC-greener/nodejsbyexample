function splitCommentToMultiLines(comment, maxLineLength) {
  const result = [];
  let currentLine = "";

  comment.split(" ").forEach(word => {
    if ((currentLine + word).length > maxLineLength) {
      result.push("// " + currentLine.trim()); // 将当前行添加到结果中，并添加注释标记
      currentLine = word + " "; // 从新单词开始新的一行
    } else {
      currentLine += word + " "; // 否则，继续在当前行添加单词
    }
  });
  
  // 不要忘记添加最后一行，如果它不空的话
  if (currentLine.trim()) {
    result.push("// " + currentLine.trim());
  }
  
  return result;
}
function isNotContainChinese(str) {
  // 排除掉中文字符
  return !/[\u4e00-\u9fa5]/.test(str);
}

module.exports = {
  splitCommentToMultiLines,
  isNotContainChinese
}