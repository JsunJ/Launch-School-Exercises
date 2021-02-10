let copyObj = (objToCopy, keys) => {
  let copyOfObj = {};
  
  if (keys) {
    keys.forEach(key => {
      copyOfObj[key] = objToCopy[key];
    });

    return copyOfObj;
  } else {
    return Object.assign( copyOfObj, objToCopy);
  }
};

let thisObject = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(thisObject);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(thisObject, [ 'foo', 'qux' ]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(thisObject, [ 'bar' ]);
console.log(newObj3); // => { bar: 2 }