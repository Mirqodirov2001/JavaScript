`use strict`


//console.log(object())  //PROTATYPE

//console.log(this)//global window

// "use strict" ? undefined : global window

//function getThis()
//{
//    console.log(this)
//}


//getThis()


//global window , use strict -> ishlamaydi

//const message = () =>
//{
//    console.log(this)
//}

//message()

///

//const message = function ()
//{
//    console.log(this)
//}

//message()


//This o'zini ichidaga qiymatlarni olib beradi;
//This object ichidagi hamma narsani qaytarib beradi;

/*
const obj = {

    isName: `New Object`,
    getInfo: function ()
    {
        console.log(this)
    },

    extar: `smth`

}
*/

//obj.getInfo()
//console.log(obj)


//function App(name, version, lastUpdate)
//{
//    this.name = name;
//}

//const tg=new App('telegram')
//console.log(tg)

/*
//instance

function Car(brand, name, color, price, year)
{
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.price = price;
    this.year = year;
}

const damas = new Car('GM', "Damas", "Black", "11000", "2022");
const kia = new Car('CIA', 'K5', 'Black', '42000', '2023');

damas.fullInfo = function ()
{
    console.log(`brand: ${this.brand} Monapolist!. Price: ${this.price}$ arzimaydi `)
}

console.log(new Car());
console.log(kia);
console.log(damas);
damas.fullInfo();
*/

/*
function Car(brand, name, color, price, year)
{
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.price = price;
    this.year = year;
}


Car.prototype.getBranding = function ()
{
    return `Barnd: ${this.brand}`
}

Car.prototype.getBranding = function ()
{
    return `Brand: ${this.Car}`
}


const damas = new Car('GM', "Damas", "Black", "11000", "2022");
const kia = new Car('CIA', 'K5', 'Black', '42000', '2023');

damas.fullInfo = function ()
{
    console.log(`brand: ${this.brand} Monapolist!. Price: ${this.price}$ arzimaydi `)
}


console.log(new Car())

*/


/*
//Spread operators

const app = {
    name: `name`,
    age: 12,
    logo:`http://picsum.photos/id/12/36/36`
}

const app2 = {
    name: `name`,
    age: 12,
    logo: `http://picsum.photos/id/12/36/36`
}

const app3 = {

    ...app,
    ...app2,
    ...{ color: `green`, backround: `red` }
}

console.log(app3)

*/

/*
//Distructure //destruction qayta struktsiyalash

const meta = {
    name: `Meta`,
    age: `12`,
    country: `USA`,
    users: `22B`,
    project: {
        facebook: {
            name: `facebook`,
            age: `12`,
            country: `USA`,
            users: `3B`,
            app: [`messanger`, `facebook-buisess`, `facebook-web-devlopers`]

        },
        instagram: {
            name: `instagram`,
            age: `9`,
            country: `USA`,
            users: `643M`,
            app: [`Insta-store`]

        },
        whatsapp: {
            name: `whatsapp`,
            age: `14`,
            country: `USA`,
            users: `2B`,
            app: []
        },
        React: {
            name: `React`,
            age: `10`,
            country: `USA`,
            users: `2B`,
            app: [`Next`, `React-router`, `Query`]

        }
    }
}

//console.log(meta.project.facebook.app[0])


//const { name } = { name: `React` }

//console.log(meta)


//const { project } = meta

//console.log(project);


//const { project: { React: { users } } } = meta;

//console.log(users);


*/
//


/*
//Optional chaining   //ixtiyoriy qo'llanish

console.log(meta.project.instagram.ages?.n1); // ? xatolikni oldini oladi
console.log(meta?.project?.twitter?.age) //  ? optional chaining
console.log(meta.version?.v1) // ? hatolikni oldini oladi undefined qiymat qaytaradi
*/


/*
//Math object

console.log(Math.floor(1.5)) //kichik tomonga yahlitlash
console.log(Math.ceil(1.5))  //katta tomonga 
console.log(Math.round(1.4)) //50% pastga yoki tepaga
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, -22)) // minimum number chiqaradi
console.log(Math.max(1, 2, 3))//maximum number
console.log(Math.trunc(0.43))//number butun qismini oladi
console.log(Math.abs(-112))//sonni moduli
console.log(Math.pow(25, 1 / 2))//sonni darajasini hisoblab beradi
console.log(Math.sqrt(25))//kvadrat ildiz
console.log(Math.trunc(Math.random() * 100))//100 gacha bo'lgan tasodifiy sonlar chiqarib beradi

*/

