function taskA() {
  console.log("タスクAを実行 at " + Date(Date.now()));
}

function taskB() {
  console.log("タスクBを実行 at " + Date(Date.now()));
}

function taskAsync() {
  console.log("非同期タスクを実行 at " + Date(Date.now()));
}

taskA();
setTimeout(() => {
  taskAsync();
}, 1000);
taskB();
