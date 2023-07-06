class ArrayWrapper {
  constructor(array = []) {
    this.array = array;
  }

  static of(...items) {
    return new this(items);
  }

  get length() {
    return this.array.length;
  }
}

const arrayWrapper = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapper.length);
