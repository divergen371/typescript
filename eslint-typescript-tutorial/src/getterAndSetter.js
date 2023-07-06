class NumWrapper {
  constructor(value) {
    this._value = value;
  }

  get value() {
    console.log("getter");
    return this._value;
  }

  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}

const numWrapper = new NumWrapper(1);
console.log(numWrapper.value);
numWrapper.value = 42;
console.log(numWrapper.value);
