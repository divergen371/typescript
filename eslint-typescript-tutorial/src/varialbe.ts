function output() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-var
  var x = 1;
  {
    // eslint-disable-next-line no-console, @typescript-eslint/no-use-before-define
    console.log(x);
    let x = 2;
  }
}

output();
