class Student {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }
    getMark() {
        console.log('Mark of ' + this.name + ' is ' + this.mark);

    }
};

class Leader extends Student{

}

let student1 = new Student('Alen', 22, 95);
student1.getMark();
let student2 = new Student('Bithun', 24, 98);
student2.getMark();
let student3= new Leader('Athira',25,100);
student3.getMark()