//Type conversion

//1. 12+"" // type string;
//2. var result = String(number);

/*let res = Number(true);

console.log(false);
console.log(res);

console.log(typeof String(12));
*/





/*

//Math operators
// + , - , * , / , % , () , == , ++ , -- , **

let num = 10;
console.log(7 % 13);
console.log(2 ** 11);
console.log(num++);
console.log(num);
console.log(2 * 11);
console.log(10 + "");

*/

//Comparison operators  //taqqoslash operatorlari

//==   // qiymatlar solishtiradi;

//===   // type larini solishtiradi
/*
console.log(10 == `10`);  //true
console.log(10 === `10`);  //false
console.log(11 >= `10`);  //true
console.log(11 <= `10`); //false
*/







/*

//Logical operations //mantiqiy operatorlar;

//  ||  ,  &&  ,  !

//Qiymatlar;

//Truthy;
//Falthy;



console.log(10 && 0 && 12 && false); //mantiqiy ko'paytirish birinchi false qiymat qidiradi, false qiymat chiqaradi;

console.log(false && true || 21); //false qiymat bo'lgani u-n logical operator orqali true qidiradi va chiqaradi;

console.log(!10); // true ni !emas holati false chiqadi;

console.log(!``) // false qiymatini !inkor holati true qiymat bo'ladi;

console.log(!`0`)// logical is not
*/





/*

if state

if (cond)
{
    //cond true
} else
{
    //cond false
}


//FALSE -> 0 , "" , undefined , NaN , null;
//TRUTHY -> 1 , "string" , true , !false;

let cond =12;

if ("ok")
{
    console.log(`OK`)
} else
{
    console.log(`error`)
}
*/




/*
var a = 10;
if (a > 0)
{
    console.log(true)
} else
{
    console.log(false)
}

*/



/*
var a = 3;

if (a % 2)
{
    console.log(true)
} else
{
    console.log(false)
}
*/


/*
var a = 3;
var b = 5;

if (a > 0 && b > 0)
{
    console.log(true)
} else
{
    console.log(false)
}
  */


/*
var a = 4;
var b = 6;
var c = 3;

if (a > b && b > c)
{
    console.log(true)
} else
{
    console.log(false)
}
*/


/*
var a = 12;
var b = 34;
var c = 42;

if (a < b && b < c)
{
    console.log(true)
} else
{
    console.log(false)
}

*/

//
/*
var a = 12;
var b = 13;

if (a % 2 && b % 2)
{
    console.log('toq son');
} else
{
    console.log('a yoki a juft son');
}
*/

//

/*
var a = 12;
var b = 21;
var c = 11;
var d = -1;

if (a, b, c, d > 0)
{
    console.log('musbat son')
} else
{
    console.log('manfiy son bor')
}

*/
//
/*
var a = -1;
var b = 11;
var c = -2;

if (a > 0 && b > 0)
{
    console.log(true)
} else if ( b>0 && c>0)
{
    console.log(true)
} else if (a > 0 && c > 0)
{
    console.log(true)
} else
{
    console.log(false)
}
*/

//


//

/*
var a = 7;

if (a > 7)
{
    console.log('Bunday hafta kuni yoq!')
}
switch (a)
{
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}

*/