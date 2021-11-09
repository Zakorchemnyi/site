/*let i=7;
let a=3;
console.log(i*a);
let pens=15;
let pencils=7;
console.log(pens+pencils);
*/
const cars = {};
    cars.new = 7;
    cars.needToRepair = 2;
    const sum=cars.new+cars.needToRepair;
    console.log(sum);

const Cat={color: 'brown', 
    age: 5,
    size: 'small'};
    console.log(Cat);

const pencil = {price: 2,
    quantity: 7};
    pencil.price = 3;
    console.log(pencil);

const pens = {price: 2,
    quantity: 7};
    pens.price = 3;
    delete pens.price;
    console.log(pens);

const table = {TypeOfTable: 'Dub',
     needToRepair: false};
     console.log(table);  

const books = {BooksAtHome: 7,
    BooksAtWork: 5};
    const multiply=books.BooksAtHome*books.BooksAtWork;
    console.log(multiply);

const Building = {TypeOfBuilding: 'Work'};
    if (Building.TypeOfBuilding !='Home')
    {Building.TypeOfBuilding = 'Home';}
    console.log(Building);

const Goods = {Price: 20};
     if (Goods.Price>=20)
     {Goods.Price=5};
     console.log(Goods);

const Goods2 = {Price: 25};
     if (!Goods2.hasOwnProperty('Price'))
     {Goods2[newField] = 27};
     console.log(Goods2);

Object.freeze(Goods2);
    Goods2.Price=30;
    console.log(Goods2);

const RealEstate = Object.assign({}, Building);
    console.log(RealEstate);