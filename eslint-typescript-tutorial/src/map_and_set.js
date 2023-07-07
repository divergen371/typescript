const map = new Map([
  ["a", 1],
  ["b", 1],
]);
console.log(map.size);
map.set("c", 3);
console.log(map.size);
console.log(map.get("a"));
map.set("a", 5);
console.log(map.get("a"));
//キーの存在確認
console.log(map.has("a"));
console.log(map.has("e"));

// 要素の削除
map.delete("a");
console.log(map.has("a"));
// すべて削除
map.clear();
console.log(map.size);
