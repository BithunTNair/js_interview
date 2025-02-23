function outerCounter(){
    let count =0;
    return {
        increment:function (){
            count++
        },
        decrement:function (){
            count--
        },
        current:function(){
            let currentVal=count 
        }

    }
};
console.log(outerCounter().increment());
