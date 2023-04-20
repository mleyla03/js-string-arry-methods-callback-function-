const nine = arr => arr.reduce(
    (x,y) => x.concat(Array.isArray(y) ? nine(y) : y),[]
);
console.log(nine([[1,2],[3,4]]).join("*"))