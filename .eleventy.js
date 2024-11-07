const htmlmin = require("html-minifier-terser");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/static/");
    eleventyConfig.addPassthroughCopy("./src/robotx.txt");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                preserveLineBreaks: true
			});
			return minified;
		}
		return content;
	});
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {
        dir: {
            "input" : "src",
            "output" : "public"
        },
    };
}