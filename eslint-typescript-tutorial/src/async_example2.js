function taskA() {
  console.log("タスクAを実行 at " + Date(Date.now()));
}

function taskB() {
  console.log("タスクBを実行 at " + Date(Date.now()));
}

function taskAsync() {
  console.log("非同期タスクを実行 at " + Date(Date.now()));
}
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

const startTime = Date.now();
taskA();
setTimeout(() => {
  const endTime = Date.now();
  taskAsync();
  console.log(
    `非同期処理のコールバックが呼ばれるまで${
      endTime - startTime
    }ミリ秒かかりました`
  );
}, 10);
blockTime(1000);
taskB();
