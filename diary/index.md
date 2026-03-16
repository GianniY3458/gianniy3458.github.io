---
title: 日记 Diary
permalink: /diary/
layout: default
eleventyExcludeFromCollections: true
---
{%- if collections.diary.size > 0 %}
{%- for post in collections.diary %}
- **[{{ post.data.title }}]({{ post.url }})**
{%- endfor %}
{%- else %}
- **暂时没有内容哦**
{%- endif %}
- ***未完待续...***

[返回首页](/)
