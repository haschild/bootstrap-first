// 该 ts 仅仅拿来测试使用。

// let arr = ['ab', 'bc', 'cd'];

// function fun(val) {
//     return /[a]+/g.test(val);
// };
// console.log(arr.filter(fun));


// for (var i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i); }, 100 * i);
// };

// console.log([1, 2, 3].map(x => x * x));


// { // 校验 for in 和 for of 的区别
//     // let array =[1,2,3,{name:"bob", age:12}];
//     let array = { name: "bob", age: 12 };
//     array.status="success";
//     for (let i of Object.keys(array)) {
//         console.log(i);
//     }

//     for (let i in array) {
//         console.log(array[i]);
//     }

// }

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true };
        }
    };
}