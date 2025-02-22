function check(a,b,c){
console.log(`${this.name} and ${a},${b}, ${c} `);

};
const obj={
    name :'Bithun'
}

check.call(obj,'cricket','football','hockey');
check.call(obj,['cricket','football','hockey']);