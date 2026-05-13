const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);


function reverseString(word: string): string {
    return word.split('').reverse().join('');
}
reverseString('typescript');



type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

checkType("Hello");
checkType(42);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
getProperty(user, "name")

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    };
}

const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};
toggleReadStatus(myBook);

class Person{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

function getIntersection<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(value => array2.includes(value));
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
