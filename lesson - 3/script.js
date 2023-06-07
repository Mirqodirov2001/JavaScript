//1 === '0' ? (12 > 10 ? console.log("xa") : console.log("yo'q")) : alert("Please"); ternar usulda yozish;

//isAuth ? <Home /> : <Login />  login terib ro'yxatdan o'tganligini bildiradi;

//undefined ? alert("xa") : alert("yo'q"); undefined false qiymat bo'ladi;



//Nulish colising operator;
/*
const res = 0 ?? 'error'; // 0 qaytaradi; undefined yozsak error, null bo'lsa ham error bo'ladi, NaN o'zini qaytaradi;

const res2 = null || 'error'; // true qiymat qidiradi
console.log(res);
*/

//null yoki undefined qiymat kelib qolsa o'rniga biron bir qiymat tayinlab o'tib ketish;
// ? ternary operator;
// ? optional chaining;
// ?? nulish colising operator;


// ...rest;
// ...spred;

/*
console.log(10 * "" && true || false); // 0 olib false ga tekshiradi string bo'sh bo'gani uchun 0 oladi;

console.log(0 || false);
*/

//Switch case operator; Tanlash operatori strogiy tekshiradi;


/*
let num = +prompt('number='); // string qabul qiladi;

switch (num)
{
    case 1: console.log('Monday');break;
    case 2: console.log('Tuesday');break;
    case 3: console.log('Wednesday');break;
    case 4: console.log('Thursday');break;
    case 5: console.log('Friday');break;
    case 6: console.log('Saturday');break;
    case 7: console.log('Sunday');break;
    default: console.log('Invalid number weekday');
}
*/

//For loop takrorlash operatorlari, loop lar, sikl operatorlari;


//while syntacsis;
/*while (con)
{
    //work
    //incr,decr
}
*/
//shartni tekshiradi;
//While bu condition tekshirib keyin nimadir ish bajaradi;
//Do While ohirida shart tekshiradi;


//let n = 1;

//while (n < 20) //1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
//{
//   n++;
//  console.log(n)

//}

//do             //1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
//{
//    console.log(n)
//    n++
//} while (n < 20)


//for syntacsis;
//for (iterable state, condition, incr / decr);

/*
for (let i = 0; i < 20; i++)
{
    console.log(i)
}

*/

//Nested loop ko'roq ma'lumotlarni chiqarish uchun ishlatiladi;
/*
for (let i = 0; i < 20; i++)
{
    console.log(i)
    for (let j = 0; j < 12; j++)
        console.log(j)
}
*/

/*
for (let i = 0; i < 20; i++)
{
    console.log(`class: ${i}`)
    for (let j = 0; j < 12; j++)
        console.log(`student: ${j}`)
}
*/