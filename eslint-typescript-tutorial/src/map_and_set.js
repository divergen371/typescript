const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const results = [];
map.forEach((value, key) => {
  results.push(`${key}:${value}`);
});
console.log(results);
