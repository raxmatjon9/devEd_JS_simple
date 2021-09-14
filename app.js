const userList = document.querySelector(".name-list");
const input = document.querySelector(".addlist");
const button = document.querySelector(".add");

button.addEventListener('click', function() {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(input.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
})











// const text = document.querySelector(".h1");
// const buttonr = document.querySelector(".buttonr");
// const buttong = document.querySelector(".buttong");

// const userl = document.querySelectorAll(".name-list li");

// buttonr.addEventListener("click", function() {
//     text.classList.toggle('h1r')
// })

// buttong.addEventListener("click", function() {
//     text.classList.toggle('h1g')
// })

// for (user of userl) {
//     user.addEventListener("click", function() {
//         this.style.color = "red";
//     });
// }
































/**------------------------------------- */
// num = 0;
// while (num < 101) {
//     console.log(num);
//     num++;
// }

// const students = ['John', 'Mary', 'Jack', 'Jane', 'Roma']

// for (name of students) {
//     console.log('hello ', name)

//     if (name === 'Jane') {
//         console.log(name, 'is here')
//         break;
//     }

// }

// for (name of students) {
//     console.log('hello ', name)
// }
/**---------------------------------------- */
// const students = ['John', 'Mary', 'Jack', 'Jane', 'Roma']

// console.log(students)
//     // students.push('Williamson')
//     // console.log(students)
//     // students.pop()
//     // console.log(students)
//     // students.pop()
//     // console.log(students)
// a = students.indexOf('John')
// console.log(students[a])


// /*Game  */
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// life = 0;
// num = getRandomInt(10)
// while (life < 6) {

// }




/*---------------------------------- */
// age = 17;
// if (age < 16) {
//     console.log('Siz voyaga yetmagansiz!')
// } else {
//     console.log('Siz voyaga yetgansiz!')

// }


/*---------------------------------- */

// name = 'raxmatjon'
// age = 17;

// console.log('Hello my name is ' + name + ' . I\'m 17 y.o.')
// console.log(`Hello my name is ${name} I'm ${age} y.o.`)







// name = 'ufo'

// console.log(`Hello ${name}`)






/*----------------------------*/
// console.log('Hello it\'s me Roma');



/*----------------------------*/
// name = 'raxmatjon'

// age = 17;

// console.log(name + age);







/*----------------------*/

// const name = 'raxmatJON'

// function upperr(text) {
//     return text.toUpperCase()
// }

// console.log(upperr(name))



/*----------------------*/

// function yigindi(a, b) {
//     return a + b
// }

// console.log(yigindi(2, 3))


/*----------------------*/

// const name = 'ufo';

// function a() {
//     console.log(name)
// }


/*----------------------*/
// function to10() {
//     const name = 'ufo'
//     var a = 0;
//     while (a < 11) {
//         console.log(a)
//         a += 1
//     }
// }
// const name = 'ufo'

// console.log(name)
// to10()