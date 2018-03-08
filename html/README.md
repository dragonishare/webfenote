## HTML规范

* 头部要声明 doctype :`<!DOCTYPE html>`
* 指出页面的语言:`<html lang="en">`
* 声明一个明确的字符编码:`	<meta charset="UTF-8">`
* Edge 模式告诉 IE 以最高级模式渲染文档，也就是**任何 IE 版本都以当前版本所支持的最高级标准模式渲染**，避免版本升级造成的影响。强制 IE 使用 Chrome Frame 渲染。 **最佳的兼容模式方案**:`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
* 通常在引入 CSS 和 JavaScript 时不需要指明 type，css 放 head 头部
* 缩进 现在一般使用 4 个空格；
* 标签正确关闭；
* 在属性上，使用双引号 ""，不要使用单引号 ''；
* 属性顺序： HTML 属性应该按照特定的顺序出现以保证易读性。尽量大部分用 class，少使用 id
    + class
    + id, name
    + data-*
    + src, for, type, href, value
    + title, alt
    + role, aria-*
* Boolean 属性指不需要声明取值的属性
 

