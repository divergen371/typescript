class ArrayWrapper {
  constructor(array = []) {
    this.array = array;
  }

  static of(...items) {
    return new ArrayWrapper(items);
  }

  get length() {
    return this.array.length;
  }
}

const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);

console.log(arrayWrapperA.length);
console.log(arrayWrapperB.length);
