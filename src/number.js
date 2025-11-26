exports.randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
exports.clamp = (num, min, max) => Math.min(Math.max(num, min), max);
exports.sum = (arr) => arr.reduce((a, b) => a + b, 0);