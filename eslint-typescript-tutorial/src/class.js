class MyClass {
  constructor() {}
}

const myClass = new MyClass();
const myClass2 = new MyClass();

console.log(myClass === myClass2);
console.log(myClass instanceof MyClass);
console.log(myClass2 instanceof MyClass);
