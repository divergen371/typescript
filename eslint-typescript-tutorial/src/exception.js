try {
  eval("foo bar");
} catch (error) {
  console.log(error instanceof SyntaxError);
  console.log(error.name);
  console.log(error.message);
}
