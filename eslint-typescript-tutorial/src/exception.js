try {
  console.log(x);
} catch (error) {
  console.log(error instanceof ReferenceError);
  console.log(error.name);
  console.log(error.message);
}
