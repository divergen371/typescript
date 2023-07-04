## Reactとは？

Facebook社が開発した、ウェブアプリケーションのUIを作るためのパッケージ。
Reactを使うと複雑なUIやインタラクションを短く簡潔にかけるようになり状態の管理もわかりやすくなる。

## Reactの3大特徴

### 仮想DOM

- DOMとは
  - HTMLをJavaScriptから参照・操作する仕組み。
  - HTMLを文字列操作ではなくオブジェクトとして処理できる。
  - HTMLを操作するためのAPIのようなもの。
  - DOMは必ずしも使いやすいAPIではない。複雑なUIを作ろうとすると管理や実装が難しくなる。
  - 注意深く実装しないと、表示や状態の変更し忘れといったバグを産みやすくなる。
  - パフォーマンス面で問題が出ることもある。

- 仮想DOM
  - DOMのプロキシのようなもの。
  - 状態管理上のバグを起こしにくい設計になっている。
  - 描画処理の最適化も行ってくれる。
  - 複雑なUI開発をサポートしてくれる

### 宣言的UI

Reactを使わずにUIを実装すると命令的なコードになる。
以下のHTMLリストを表示する場合について命令的なコードと宣言的なコードを見比べる。

```HTML
<ul>
    <li>りんご</li>
    <li>オレンジ</li>
    <li>ぶどう</li>
</ul>
```

- 命令的コード

```JavaScript
const list = document.createElement("ul");
const apple = document.createElement("li");
apple.innerText = "りんご";
list.append(apple);
const orange = document.createElement("li");
apple.innerText = "オレンジ";
list.append(orange);
const grape = document.createElement("li");
apple.innerText = "ぶどう";
list.append(grape);
```

- 宣言的UI

```JavaScript
function Fruits() {
    return (
       <ul>
    <li>りんご</li>
    <li>オレンジ</li>
    <li>ぶどう</li>
</ul>
    )
}
```

命令的コードはどのようにHTML作成したらいいかをいちいち指示なければいけない。
対して宣言的UIは「このような表示」を生成してほしいという目標だけが書かれている。

宣言的UIでは実装の細部やアルゴリズムを気にしなくていい（本当に？）「どんなUIにしたいか」の一点に集中して開発できる。
