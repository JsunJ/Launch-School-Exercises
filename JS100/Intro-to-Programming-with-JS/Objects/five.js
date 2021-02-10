let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.a = 3;
myObj.b = 4;

for (let prop in myObj) {
  console.log(myObj[prop]);
}

console.log(myObj);