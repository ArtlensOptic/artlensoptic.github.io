const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/static/");
    eleventyConfig.addPassthroughCopy("./src/robotx.txt");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {
        dir: {
            "input" : "src",
            "output" : "public"
        },
    };
}