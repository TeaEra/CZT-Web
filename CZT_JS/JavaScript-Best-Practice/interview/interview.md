------

### 基础

- HTTP请求的常见方法有GET和POST，二者的主要区别？
> Hint: 对URL的影响，安全性，对服务器端的影响；
> 其他HTTP方法？

- HTTP状态码，常见状态码的认识，比如200 404 500？
> Extension: 304,401,403,502,504；

- 对于后端语言的使用，例如，脚本语言使用？
> Hint: 输出 Hello, world! 在浏览器端输出也可；

- 对前端的理解与关注？
> Hint: bootstrap, responsive design, frameworks, GitHub, sass, compass, 
functional programming;

- 使用过的有关js、css、html的工具？
> Hint: online tools, cross-ie-browser;

------

### HTML

- XHTML规范的一些认识？
> Hint: 文档良好结构；

- HTML5规范的空模板？
> Hint: 即平时为了避免重复性工作，写的模板文件，要包含doctype,head,body,title,Chinese encoding;
> Extension: icon;

- script标签放在head和body的影响有何不同？
> Link: [test page](js-script-position/1.html)

------

### JavaScript

- 对null和undefined的理解？
> Hint: typeof null;

- 匿名函数？
> Hint: 一起函数皆变量，即first class functions;

- ==与===？
> Hint: null == undefined 与 null === undefined

- 闭包的认识？
> Extension:
```javascript
function foo(x) {
  var tmp = 10;
  function bar(y) {
    alert(x + y + (++tmp));
  }
  bar(3);
}
foo(2);
foo(2);
foo(2);
```

- 严格模式(strict mode)的认识？
> Hint: 全局变量；

- jQuery对id、class、tag的选取，以及对应的原生js对三者的选取？
> Hint: 与css相关；

- 对于js call和apply的认识？
> Hint: 类似于适配器模式的一种运用
```javascript
var cat = {
  type: "cat",
  move: function () {
    console.log(this.type + " moving");
  }
}
var dog = {
  type: "dog", 
  move: function () {
    // call or apply
  }
}
cat.move();
```

- 原型链prototype的使用
    + 将"123"分成["1", "2", "3"]，任何方法都可以
    + 将["1", "2", "3"]合并成为"1 2 3"
    + 将"123" -> "1 2 3"这个过程的方法加入String的原型链
    + Hint:
    ```javascript
    var str = "123";
    //
    function add_space() {
        // "123" -> ["1", "2", "3"]
        // ["1", "2", ""3] -> "1 2 3"
    }
    // Add add_space to prototype of String
    ```

------

### CSS

- css可以针对id、class、tag进行样式设置，priority方面是怎样的？
> Hint: !important的影响；
> Link: [test page](css-priority/index.html)

- CSS3中对圆角的原生属性是？

- 对z-index的理解？

- browser会自带样式，有时会影响预期效果，需要做什么样的准备工作，来去掉一些浏览器自带样式？

- float和清除浮动？