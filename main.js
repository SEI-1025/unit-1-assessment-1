let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus');
let sub = document.querySelector('#sub')
let tester = document.querySelector('#tester')
let number = 0;

document.getElementById("sub").onclick = function() {countDown()};
document.getElementById("plus").onclick = function() {countUp()};

function countDown(){
    tester.textContent = number--;
}
function countUp() {
    tester.textContent = number++;
}









// // document.addEventListener("click", countUp);
// function countUp() {
//     tester.textContent = number++;
// }
// sub.addEventListener("click", countDown);
// function countDown(){
//     tester.textContent = number--;
// }

// // let number1 =;
// // numbers.push(number1);

// // for (let i=0; i < numbers.length;i++){
// //     let number1 =0;
// //     counter.textContent = `${numbers.length}`;
// //     numbers.push(number1);
// // }

// // }