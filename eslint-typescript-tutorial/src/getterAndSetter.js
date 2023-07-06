class NumWrapper {
  _value;
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }
}

const numWrapper = new NumWrapper(1);
console.log(numWrapper._value);
