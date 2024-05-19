const list = [
    // js基础
    { "eng-name": "Hello World", name: "Hello World" },
    { "eng-name": "Values", name: "变量" },
    { "eng-name": "Const", name: "常量" },
    { "eng-name": "For", name: "循环" },
    { "eng-name": "If Else", name: "条件判断" },
    { "eng-name": "Switch", name: "Switch语句" },
    { "eng-name": "Array", name: "数组" },
    { "eng-name": "Template String", name: "模板字符串" },
    { "eng-name": "Function", name: "函数" },
    { "eng-name": "Arrow Function", name: "箭头函数" },
    { "eng-name": "Recursion", name: "递归" },
    { "eng-name": "Class", name: "类" },
    { "eng-name": "String Functions", name: "字符串函数" },
    // { "eng-name": "Array Fucntions", name: "数组函数" },
    // { "eng-name": "Promises", name: "Promises" },
    // { "eng-name": "Async-Await", name: "Async/Await" },
    // { "eng-name": "Regular Expressions", name: "正则表达式" },
    // { "eng-name": "JSON Handling", name: "JSON处理" },
    // 提升编程技巧
    // { "eng-name": "Closures", name: "闭包" },
    // { "eng-name": "Prototypes and Inheritance", name: "原型与继承" },
    // { "eng-name": "Timers", name: "定时器" },
    // { "eng-name": "NextTick and setImmediate", name: "立即执行函数与下一个周期" },
    // { "eng-name": "Error Handling", name: "错误处理" },
    // { "eng-name": "Streams", name: "流" },
    // { "eng-name": "Stream Flow Control", name: "流控制" },
    // // 事件和缓存处理
    // { "eng-name": "Events and EventEmitter", name: "事件与事件发射器" },
    // { "eng-name": "Buffer", name: "缓冲区" },
    // // 复杂级别概念
    // { "eng-name": "File System Operations", name: "文件系统操作" }, // 读文件和写文件
    // { "eng-name": "File and Directory Paths", name: "文件和目录路径" },
    // { "eng-name": "Spawning Child Processes", name: "生成子进程" },
    // { "eng-name": "Executing Child Processes Directly", name: "直接执行子进程" },
    // { "eng-name": "Worker Threads", name: "工作线程" },
    // { "eng-name": "Handling OS Signals", name: "处理操作系统信号" },
    // { "eng-name": "Process Termination", name: "进程终止" },
    // { "eng-name": "url Parsing and Construction", name: "url解析与构建" },
    // // 系统级别概念
    // { "eng-name": "Cryptography", name: "加密" },
    // { "eng-name": "Managing Environment Variables", name: "管理环境变量" },
    // { "eng-name": "Application Logging", name: "应用日志记录" },
    // // 操作命令与网络服务
    // { "eng-name": "Processing Command-Line Arguments", name: "处理命令行参数" },
    // { "eng-name": "Command-Line Flags", name: "命令行标志" },
    // { "eng-name": "Subcommands", name: "子命令" },
    // { "eng-name": "HTTP/HTTPS Client", name: "HTTP/HTTPS客户端" },
    // { "eng-name": "Creating an HTTP Server", name: "创建HTTP服务器" },
  ];
  const formattedList = list.map((item) => ({
    url: item["eng-name"].toLowerCase().replace(/\s+/g, "-"), // 将字符串转小写并以连字符代替空格
    name: item["name"],
  }));
  export default formattedList;