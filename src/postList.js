const list = [
    // 基础概念
    { "eng-name": "Hello World", name: "Hello World" },
    { "eng-name": "Values", name: "变量" },
    { "eng-name": "Const", name: "常量" },
    { "eng-name": "For", name: "循环" },
    { "eng-name": "If Else", name: "条件判断" },
    { "eng-name": "Switch", name: "Switch语句" },
    { "eng-name": "Arrays", name: "数组" },
    { "eng-name": "Function", name: "函数" },
    // { "eng-name": "String and Character Encoding", name: "字符串与字符编码" },
    // { "eng-name": "String Manipulation", name: "字符串操作" },
    { "eng-name": "Template String", name: "模板字符串" },
    // { "eng-name": "Regular Expressions", name: "正则表达式" },
    // { "eng-name": "JSON Handling", name: "JSON处理" },
    // 提升编程技巧
    // { "eng-name": "Closures", name: "闭包" },
    // { "eng-name": "Recursion", name: "递归" },
    // { "eng-name": "Class Methods", name: "类方法" },
    // { "eng-name": "Prototypes and Inheritance", name: "原型与继承" },
    // { "eng-name": "Timers", name: "定时器" },
    // { "eng-name": "NextTick and setImmediate", name: "立即执行函数与下一个周期" },
    // // 错误处理
    // { "eng-name": "Error Handling and Callbacks", name: "错误处理与回调" },
    // { "eng-name": "Creating Custom Error Types", name: "创建自定义错误类型" },
    // { "eng-name": "Unhandled Exceptions", name: "未处理的异常" },
    // { "eng-name": "Handling Asynchronous Errors", name: "处理异步错误" },
    // // 异步编程和流控制
    // { "eng-name": "Promises & Async/Await", name: "Promises与异步/等待" },
    // { "eng-name": "Asynchronous Patterns", name: "异步模式" },
    // { "eng-name": "Streams", name: "流" },
    // { "eng-name": "Stream Flow Control", name: "流控制" },
    // { "eng-name": "Async Control Flow", name: "异步控制流" },
    // // 事件和缓存处理
    // { "eng-name": "Events and EventEmitter", name: "事件与事件发射器" },
    // { "eng-name": "Buffer", name: "缓冲区" },
    // { "eng-name": "The require cache", name: "模块缓存" },
    // // 复杂级别概念
    // { "eng-name": "File System Operations", name: "文件系统操作" },
    // { "eng-name": "File and Directory Paths", name: "文件和目录路径" },
    // { "eng-name": "Spawning Child Processes", name: "生成子进程" },
    // { "eng-name": "Executing Child Processes Directly", name: "直接执行子进程" },
    // { "eng-name": "Worker Threads", name: "工作线程" },
    // { "eng-name": "Handling OS Signals", name: "处理操作系统信号" },
    // { "eng-name": "Process Termination", name: "进程终止" },
    // { "eng-name": "url Parsing and Construction", name: "url解析与构建" },
    // { "eng-name": "References", name: "引用" },
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
    // { "eng-name": "Using the context module", name: "使用上下文模块" },
  ];
  const formattedList = list.map((item) => ({
    url: item["eng-name"].toLowerCase().replace(/\s+/g, "-"), // 将字符串转小写并以连字符代替空格
    name: item["name"],
  }));
  export default formattedList;