function taskA() {
  console.log("タスクAを実行 at " + Date(Date.now()));
}

function taskB() {
  console.log("タスクBを実行 at " + Date(Date.now()));
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

taskA();
blockTime(1000);
taskB();
