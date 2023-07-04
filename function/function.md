# 簡単な関数を作ってみる

## JavaScriptで発生しうる問題

```JavaScript
function increment(num) {
  return num + 1;
}

console.log(increment(999));
```

インクリメントを返すだけの関数。これは問題なく動く。

```JavaScript
function increment(num) {
  return num + 1;
}

console.log(increment("999"));
```

関数に渡す引数を文字列型に変えてみる。エラーになりそうだが…。

```zsh
> node increment.js
9991
```

型強制の仕様により、関数内のnumber型の1が文字列型に変換されて引数と結合されてしまう。（型強制の挙動は演算子や値による）

これを防ぐには引数にわたす値に制約を課すしか無い。ここでTypeScriptの出番である。
