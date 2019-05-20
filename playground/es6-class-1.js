class Person{
    constructor(name = 'Matheus Developer Web', age = 0) {
        //this.name = name || Matheus Developer WEB;
        this.name = name;
        //this.age = age || 0;
        this.age = age;
    }
    getGretting() {
        //return 'Hi, i am ' + this.name + '!';
        return `Hi. I am ${this.name}.`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Matheus Binotto', 25);
console.log(me.getGretting());
console.log(me.getDescription())

const other = new Person();
console.log(other.getGretting());
console.log(other.getDescription());