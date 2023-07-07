function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError(`${str} is not a string`);
  }
  return Array.from(str).reverse().join("");
}

try {
  reverseString(100);
} catch (error) {
  console.log(error instanceof TypeError);
  console.log(error.name);
  console.log(error.message);
}
