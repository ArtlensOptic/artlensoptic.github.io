const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/static/");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
    return {
        dir: {
            "input" : "src",
            "output" : "public"
        },
    };
}