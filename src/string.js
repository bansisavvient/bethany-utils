exports.capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
exports.toCamelCase = (str) =>
  str
    .replace(/[-_ ]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (match) => match.toLowerCase());
exports.toSlug = (str) =>
  str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");