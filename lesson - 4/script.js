/*function numberkub(number)
{
    var cube = number * number * number;
    return cube;
}

// misol uchun son 3
var num = 9;
var numberkub =numberkub(num);
console.log(numberkub);


*/

/*
function yigindi(number)
{
    let total = number + number;
    return total;
}

// misol uchun 5 
var num = 5;
var yigindi = yigindi(num);
console.log(yigindi);

*/

/*
function yigindi(number)
{
    let total = number - number;
    return total;
}

// misol uchun 5 
var num = 5;
var yigindi = yigindi(num);
console.log(yigindi);

*/

/*
function findPower(a)
{
    var square = a * a;
    var cube = a * a * a;
    var fourthPower = a * a * a * a;
    return [square, cube, fourthPower];
}

// misol uchun son 5
var num = 5;
var powersOfNum = findPower(num);
console.log(powersOfNum);
*/

/*
function OddNumbers(n)
{
    for (var i = 1; i <= n; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}

// misol uchun son 10
var num = 10;
OddNumbers(num);
*/

/*
function OddNumbers(n)
{
    for (var i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            console.log(i);
        }
    }
}

// misol uchun son 10
var num = 10;
OddNumbers(num);
*/

//let n = +prompt(`Enter number: `);
let result = document.getElementById(`result`);

let n = 0;

const incr = () =>
{
    n += 1;
    result.textContent = n;
};
const decr = () =>
{
    if (n < 1)
    {
        alert(`STOP`);
    } else
    {
        n -= 1;
    }
    result.textContent = n;
};

const mode = () => document.body.style.backgroundColor = `black`;
