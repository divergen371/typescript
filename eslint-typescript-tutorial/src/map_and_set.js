const map = new Map([
  ["a", 1],
  ["b", 2],
]);

const entries = [];

for (const [key, value] of map.entries()) {
  entries.push(`${key}: ${value}`);
}

console.log(entries);
