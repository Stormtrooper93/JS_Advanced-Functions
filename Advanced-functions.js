`use strict`;

// console.log ("1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).")
    
//     console.log(addThemAll(2,4));       // 6
//     console.log(addThemAll(1,2,3,4));   // 10
//     console.log(addThemAll(5,5,10));    // 20
    
//     function addThemAll (...args) {
//         return args.reduce(function(acc, cur) {
//             return acc+cur;
//         });
//     };


//     console.log (""); // Пустий рядок 
//     console.log ("2. Задача на використання замикання. Напишіть функцію яка працює таким чином: `multiply(a)(b)` // a * b ");
    
//     console.log(multiply(5)(5));    // 25
//     console.log(multiply(2)(-2));   // -4
//     console.log(multiply(4)(3));	// 12
    
//     function multiply(a) {
//         return function(b) {
//             return a*b;
//         };
//     };
    

//     console.log (""); // Пустий рядок 

//     console.log ("3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:");
//     console.log ("- властивість за якою треба посортувати");
//     console.log ("- опцію напрямку сортування, зростання чи спадання");
    
//     const movies = [
//     {
//         movieName: 'The Thing',
//         releaseYear: 1982,
//         directedBy: 'Carpenter',
//         runningTimeInMinutes: 109,
//     },
//     {
//         movieName: 'Aliens',
//         releaseYear: 1986,
//         directedBy: 'Cameron',
//         runningTimeInMinutes: 137,
//     },
//     {
//         movieName: 'Men in Black',
//         releaseYear: 1997,
//         directedBy: 'Sonnenfeld',
//         runningTimeInMinutes: 98,
//     },
//     {
//         movieName: 'Predator',
//         releaseYear: 1987,
//         directedBy: 'McTiernan',
//         runningTimeInMinutes: 107,
//     },
//     ];
    
//     console.log(movies.sort(byProperty('releaseYear', '<'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
//     // console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
//     // console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
    
//     function byProperty(property, direction) {
//         console.log(typeof property)
//         if (typeof [property] === String) {
//             if (direction === '>') {
//                 return function(a,b) {
//                     let x = a[property].toLowerCase();
//                     let y = b[property].toLowerCase();
//                     return x < y ? -1 : x > y ? 1 : 0;
//                 };
//             }
//             else {
//                 return function(a,b) {
//                     let x = a[property].toLowerCase();
//                     let y = b[property].toLowerCase();
//                     return x > y ? -1 : x < y ? 1 : 0;
//                 };
//             }
//         }
//         else {
//             if (direction === '>') {
//                 return ((a, b) => (a[property] - b[property]));
//             }
//             else {
//                 return ((a, b) => (b[property] - a[property]));
//             };
//         };
//     };
    




// console.log (""); // Пустий рядок 

// console.log ("4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:");
// console.log ("- Використовуючи setInterval");

// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!*

// function detonatorTimer(delay) {
//     let timerId = setInterval(function() {
//         console.log(delay);
//         delay--
//         if (delay < 1) {
//             console.log("BOOM!");
//             clearInterval(timerId);
//         };
//     }, 1000);
// };


// console.log ("- Використовуючи вкладений setTimeout");

// detonatorTimer2(3);

// function detonatorTimer2(delay) {
//     let timerId2 = setTimeout(function tick() {
//         console.log(delay);
//         delay--
//         timerId2 = setTimeout(tick, 1000);
//         if(delay < 1) {
//             console.log("BOOM!");
//             clearTimeout(timerId2);
//         };
//     }, 1000);
// };





// console.log (""); // Пустий рядок 

// console.log ("5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.");

// let aboutPerson = {
//     name: 'Vitalii',
//     bornCountry: 'Ukraine',
//     liveCountry: 'USA',
//     age: 29,
//     hobby: 'lettering',
//     marriedStatus: 'married',
//     numberOfChildren: '1',
//     job: 'Shipping Clerk',
//     jobGoal: 'JS Developer',

// helloMsg() {
// console.log(`Hello guys, my name is ${this.name} and I'm ${this.age}`);
// },
// bornAndLiveCity() {
// console.log(`I was born at ${this.bornCountry} and at this time i live in ${this.liveCountry}`);
// },
// jobGoals(){
// console.log(`At this time I'm working as ${this.job}, but in future I want to be ${this.jobGoal}`);
// }
// }

// aboutPerson.helloMsg();
// aboutPerson.bornAndLiveCity();
// aboutPerson.jobGoals();





// console.log (""); // Пустий рядок 

// console.log ("6. А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймерi");

// let securedSelfHelloMsg = aboutPerson.helloMsg.bind(aboutPerson);
// let securedSelfBornAndLiveCity = aboutPerson.bornAndLiveCity.bind(aboutPerson);
// let securedSelfJobGoals = aboutPerson.jobGoals.bind(aboutPerson);

// setTimeout(securedSelfHelloMsg, 1000); // виведе коректний результат*
// setTimeout(securedSelfBornAndLiveCity, 2000); // виведе коректний результат*
// setTimeout(securedSelfJobGoals, 3000); // виведе коректний результат*






console.log (""); // Пустий рядок 

console.log ("7. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.");

function someFunction() {
    return console.log("Function works!");
}; // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    console.log("Chill out, you will get you result in 5 seconds");
    return setTimeout(func, seconds*1000);
// тут ваш код для декоратора*
};

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

// slowedSomeFunction() // викликаєте декоратор*

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'