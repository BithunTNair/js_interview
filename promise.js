const data = {
    name: 'Bithun',
    age: 24
};

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
};
fetchData().then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);

})