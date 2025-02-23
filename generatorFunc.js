function* infiniteLoop(){
    let num=0;
    while(true){
        yield num;
        num++;

    };

}
const seq= infiniteLoop();
console.log(seq.next().value);
console.log(seq.next().value);