
function show(title, result) {
    document.getElementById("output").textContent +=
        title + "\n" + result + "\n\n";
    console.log(title, result);
}



console.log("PART 1 – FUNCTIONS & CALLBACK");


function add(a, b) {
    show("1. Addition", a + b);
}
add(10, 20);



function multiply(a, b, c) {
    show("2. Multiplication", a * b * c);
}
multiply(2, 3, 4);



function subtract(a, b) {
    return a - b;
}
show("3. Subtraction", subtract(20, 10));



function task4(callback) {
    callback();
}
function message4() {
    show("4. Function as Argument", "Hello Callback");
}
task4(message4);



function completed() {
    show("5. Callback", "Task Completed");
}
completed();


 
function subtractionCallback(a, b) {
    show("Subtraction Callback", a - b);
}
function higherOrder(a, b, callback) {
    show("6. Addition", a + b);
    callback(a, b);
}
higherOrder(20, 10, subtractionCallback);



function multiplicationCallback(a, b) {
    show("Multiplication Callback", a * b);
}
function calculate(a, b, callback) {
    show("7. Addition", a + b);
    callback(a, b);
}
calculate(5, 4, multiplicationCallback);



function callbackOne() {
    show("Callback One", "Good Morning");
}
function callbackTwo() {
    show("Callback Two", "Welcome");
}
function twoCallbacks(first, second) {
    first();
    second();
}
twoCallbacks(callbackOne, callbackTwo);


const arrowCallback = () => {
    show("9. Arrow Callback", "Hello JavaScript");
};
arrowCallback();


function namedFunction() {
    show("10. Named Function", "This is a named function");
}
function higherOrderFunction(callback) {
    callback();
}
higherOrderFunction(namedFunction);



console.log("PART 2 – GENERATOR FUNCTIONS");


function* students() {
    yield "Santhosh";
    yield "Arun";
    yield "Kumar";
    yield "Vijay";
    yield "Ajith";
}

const studentList = students();

show("11. Student Names",
    studentList.next().value + ", " +
    studentList.next().value + ", " +
    studentList.next().value + ", " +
    studentList.next().value + ", " +
    studentList.next().value
);



function* names() {
    yield "Ram";
    yield "Sam";
    yield "John";
}

const nameList = names();

show("12. Generator Next",
    nameList.next().value + ", " +
    nameList.next().value + ", " +
    nameList.next().value
);



function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

const numberList = numbers();

show("13. Generator Numbers",
    numberList.next().value + ", " +
    numberList.next().value + ", " +
    numberList.next().value + ", " +
    numberList.next().value
);



function* numberGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let numberOutput = "";

for (let value of numberGenerator()) {
    numberOutput += value + " ";
}

show("14. For-of Generator", numberOutput);



function* greetings() {
    yield "Good Morning";
    yield "Good Afternoon";
    yield "Good Night";
}

let greetingOutput = "";

for (let value of greetings()) {
    greetingOutput += value + "\n";
}

show("15. Greetings", greetingOutput);


function* cashback() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "30% Cashback";
    yield "50% Cashback";
    yield "100% Cashback";
}

let cashbackOutput = "";

for (let value of cashback()) {
    cashbackOutput += value + "\n";
}

show("16. Cashback Messages", cashbackOutput);



console.log("PART 3 – DEFAULT PARAMETERS");


function department(name, dept = "ECE") {
    show("17. Student Department", name + " - " + dept);
}
department("Santhosh");


function employee(name, designation = "Trainee") {
    show("18. Employee", name + " - " + designation);
}
employee("Santhosh");



function studentInfo(name, age, city = "Dharmapuri") {
    show("19. Student Info",
        name + " - " + age + " - " + city);
}
studentInfo("Santhosh", 20);



function welcome(name, message = "Welcome") {
    show("20. Welcome", message + " " + name);
}
welcome("Santhosh");
welcome("Santhosh", "Good Morning");



function product(name, price = 100) {
    show("21. Product", name + " - Rs." + price);
}
product("Pen");
product("Book", 200);




console.log("PART 4 – CURRYING & UNCURRYING");


function normalAdd(a, b, c) {
    show("22. Normal Addition", a + b + c);
}
normalAdd(10, 20, 30);



function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

show("23. Currying Addition", curryAdd(10)(20)(30));



function studentDetails(name) {
    return function(age) {
        return function(city) {
            show("24. Student Details",
                name + " - " + age + " - " + city);
        };
    };
}
studentDetails("Santhosh")(20)("Dharmapuri");



function curryMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
show("25. Currying Multiplication",
    curryMultiply(2)(3)(4));



function employeeDetails(name, role, salary) {
    show("26. Employee Details",
        name + " - " + role + " - " + salary);
}
employeeDetails("Santhosh", "Developer", 25000);



function normalFunction(a, b, c) {
    return a + b + c;
}

function curryingFunction(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

show("27. Normal Function", normalFunction(10, 20, 30));
show("27. Currying Function", curryingFunction(10)(20)(30));



console.log("PART 5 – SPREAD OPERATOR");


let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let combined = [...arr1, ...arr2];

show("28. Combined Numbers", combined.join(", "));



let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let fruits2 = ["Kiwi", "Papaya", "Guava", "Pineapple", "Watermelon"];

let allFruits = [...fruits1, ...fruits2];

show("29. Combined Fruits", allFruits.join(", "));



let originalArray = [10, 20, 30, 40];

let copiedArray = [...originalArray];

show("30. Copied Array", copiedArray.join(", "));



let emp1 = {
    name: "Santhosh",
    age: 20
};

let emp2 = {
    city: "Dharmapuri",
    role: "Developer"
};

let combinedEmployee = {...emp1, ...emp2};

show("31. Combined Employee",
    JSON.stringify(combinedEmployee));

let object1 = {
    name: "Arun"
};

let object2 = {
    salary: 25000
};

let combinedObject = {...object1, ...object2};

show("32. Combined Object",
    JSON.stringify(combinedObject));



let firstObject = {
    name: "Santhosh"
};

let secondObject = {
    name: "Kumar"
};

let finalObject = {...firstObject, ...secondObject};

show("33. Same Property Name",
    JSON.stringify(finalObject));




console.log("PART 6 – REST & DESTRUCTURING");


function restExample(a, b, ...remaining) {
    show("34. Normal Parameters",
        a + ", " + b);

    show("34. Rest Parameters",
        remaining.join(", "));
}
restExample(10, 20, 30, 40, 50);



function eightNumbers(...numbers) {
    show("35. Eight Numbers", numbers.join(", "));
}
eightNumbers(10, 20, 30, 40, 50, 60, 70, 80);



let values = [10, 20, 30, 40, 50, 60, 70];

let [first, second, third] = values;

show("36. Array Destructuring",
    first + ", " + second + ", " + third);



let person = {
    name: "Santhosh",
    age: 20,
    location: "Dharmapuri"
};

let {name, age, location: cityName} = person;

show("37. Object Destructuring",
    name + " - " + age + " - " + cityName);



function collectNumbers(...nums) {
    show("38. Collected Numbers", nums.join(", "));
}
collectNumbers(5, 10, 15, 20, 25);



let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = [...tenNumbers];

show("39. Copied Ten Numbers", newNumbers.join(", "));



function displayValues(a, b, ...others) {
    show("40. First Parameter", a);
    show("40. Second Parameter", b);
    show("40. Rest Parameters", others.join(", "));
}

displayValues(10, 20, 30, 40, 50, 60, 70, 80);



console.log("MINI PROJECT");



let studentNames = [
    "Santhosh",
    "Arun",
    "Vijay"
];

show("Mini Project - Student Names",
    studentNames.join(", "));



let student1 = {
    name: "Santhosh",
    age: 20
};

let student2 = {
    city: "Dharmapuri",
    college: "ABC College"
};



let fullStudent = {...student1, ...student2};

show("Mini Project - Student Details",
    JSON.stringify(fullStudent));



function studentMarks(name, ...marks) {
    show("Mini Project - Marks",
        name + ": " + marks.join(", "));
}

studentMarks("Santhosh", 80, 85, 90, 95, 88);



function displayStudent(student, callback) {
    callback(student);
}

function studentCallback(student) {
    show("Mini Project - Callback",
        student.name + " - " +
        student.age + " - " +
        student.city);
}

displayStudent(fullStudent, studentCallback);



function studentDepartment(name, dept = "ECE") {
    show("Mini Project - Department",
        name + " - " + dept);
}

studentDepartment("Santhosh");



function curryingStudent(name) {
    return function(age) {
        return function(department) {
            show("Mini Project - Currying",
                name + " - " + age + " - " + department);
        };
    };
}

curryingStudent("Santhosh")(20)("ECE");


show("PROJECT STATUS", "All 40 Tasks Completed!");
