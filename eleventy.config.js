const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-table-of-contents");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("tocItems", function (content) {
    if (!content) {
      return [];
    }

    const headingRegex = /<h([1-3])\s+id="([^"]+)"[^>]*>(.*?)<\/h\1>/gi;
    const stripTags = (value) => value.replace(/<[^>]+>/g, "").trim();
    const items = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      items.push({
        level: Number(match[1]),
        id: match[2],
        text: stripTags(match[3])
      });
    }

    return items;
  });

  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink()
    })
    .use(markdownItToc, {
      includeLevel: [1, 2, 3]
    });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  return {
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    templateFormats: ["md", "html"],
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    }
  };
};
