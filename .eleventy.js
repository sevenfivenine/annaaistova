module.exports = function(eleventyConfig) {
    // copy the admin UI
    eleventyConfig.addPassthroughCopy("admin");
    // copy your stylesheet
    eleventyConfig.addPassthroughCopy("styles.css");
};