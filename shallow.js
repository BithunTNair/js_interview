// shallow copy

const original= {name:'Athira',address:{city:'Trivandrum'}};

// const shallowCopy= Object.assign({},original);
// const shallowCopy2= {...original};

// shallowCopy.name='Bithun';
// console.log(original);

// deep copy 
const deepCopy= JSON.parse(JSON.stringify(original));
deepCopy.name='Bithun';
console.log(original);



