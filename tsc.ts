// 该 ts 仅仅拿来测试使用。

let arr = ['ab', 'bc', 'cd'];
let arrNum = [1, 2, 3, 4, 5, 6];
let obj = {
    name: '张三',
    age: 50,
    phone: '123456761512',
    address: '川渝重庆市'
};

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

let it = makeIterator(['a', 'b']);

it.next(); // { value: "a", done: false }
it.next(); // { value: "b", done: false }
it.next(); // { value: undefined, done: true }

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

const map = new Map();
let para = ['a'];
map.set(para, 555);
// console.log(map.get(para));

// arrNUm.name='sss';

// Object.values(obj).forEach((val) => { console.log(val) });

// for (let i of Object.values(obj)){
//     console.log(i);
// };