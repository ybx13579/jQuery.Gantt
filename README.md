下载地址：https://github.com/ybx13579/jQuery.Gantt
#概述
     JQuery.Gantt是一个开源的基于JQuery库的用于实现甘特图效果的可扩展功能的JS组件库。

<img src="show/1.jpg" />


资源引用
     首先我们需要将下载到的源码中的CSS、IMG、JS等资源放入我们自己的项目中，然后在我们自己的页面中引用需要的资源文件。
CSS样式文件
`<link rel="stylesheet" href="css/style.css" />`
JS脚本文件

```
<script src="js/jquery-1.7.min.js"></script>
<script src="js/jquery.fn.gantt.js" charset ="GB2312"></script>
<script src="js/jquery.cookie.js"></script>
```

**注：如果需要甘特图中显示中文，则需要在js文件引用中加上charset特性并设置为GB2312，否则中文内容将显示为乱码。**


在需要显示甘特图的地方加入以下这个div。

```
<div class="gantt"></div>
```








