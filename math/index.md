---
title: 数学 Math
permalink: /math/
layout: default
eleventyExcludeFromCollections: true
---
{%- if collections.math.size > 0 %}
{%- for post in collections.math %}
- **[{{ post.data.title }}]({{ post.url }})**
{%- endfor %}
{%- else %}
- **暂时没有内容哦**
{%- endif %}
- ***未完待续...***

[返回首页](/)
