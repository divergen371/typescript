const map = new Map([
  ["a", 1],
  ["b", 2],
]);

const keys = [];

for (const key of map.keys()) {
  keys.push(key);
}

console.log(keys);
const keysArray = Array.from(map.keys());
console.log(keysArray);

const values = [];
for (const value of map.values()) {
  values.push(value);
}

console.log(values);
const valueArray = Array.from(map.values());
console.log(valueArray);
