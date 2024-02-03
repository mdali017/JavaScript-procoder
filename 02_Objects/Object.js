const newSymb = Symbol("Key1");
const mobileModel = {
  // key: value
  brand: "Samsung",
  model: "s24 ultra",
  processor: "Snapdragon Gen 3",
  camera: ["200", "12MP", "12MP"],
  hasZoomCamera: true,
  "selfe camera": 12,
  [newSymb]: "mykey1",
  brandModel: function () {
    return `Mobile brand is ${this.brand} and model is ${this.model}`;
  },
  battary: {
    mah: 5000,
  },
};

// console.log(mobileModel);
// console.log(mobileModel.brand);
// console.log(mobileModel["brand"]);
// console.log(mobileModel["selfe camera"]);
// console.log(mobileModel[newSymb]);

// console.log(mobileModel.model);
// Object.freeze(mobileModel);
// mobileModel.model = "s25 ultra";
// console.log(mobileModel.model);

// console.log(mobileModel.hasOwnProperty("camera"));
// console.log(mobileModel.hasOwnProperty("cameras"));

// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));

// function brandModel() {
//   return `Mobile Brand is: ${this.brand} and model is ${this.model}`;
// }
// brandModel();

// console.log(mobileModel.brandModel());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  p: 4,
  q: 5,
  r: 6,
};
const obj3 = {
  x: 7,
  y: 8,
  z: 9,
};

const objFinal1 = { obj1, obj2 };
// const objFinal2 = Object.assign(obj1, obj2, obj3);
// const objFinal2 = Object.assign(target, source);
const objFinal2 = Object.assign({}, obj1, obj2, obj3);
// console.log(objFinal1);
// console.log(objFinal2);

const objFinal3 = { ...obj1, ...obj2, ...obj3 };
// console.log(objFinal3);

// console.log(mobileModel.battary.mah);

// function Person() {
//   (this.firstName = "Ali"), (this.lastName = "Shovo");
// }
function Person(firstName, lastName) {
  (this.firstName = firstName), (this.lastName = lastName);
}

const person1 = new Person("ali", "hosain");
person1.age = 18;
const person2 = new Person("shovo", "ahmed");
console.log(person1);
console.log(person2);
