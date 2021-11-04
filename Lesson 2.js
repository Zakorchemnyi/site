let i=15;
let a=8;
console.log(i*a);
let t=i/=a;
console.log(t);
let z=i-=a;
console.log(z);
let pens=15;
let pencils=7;
console.log(pens/pencils);
if (i>a)
{console.log ("'i' is more than 'a'");};
/*function showMessage() {
console.log("Hello");
}
showMessage();*/
let data={Country:"Ukraine", City:"Lviv"};
data.Country="Germany";
console.log(data.Country);
console.log(data.City);
let Cars={};
Cars["Volksvagen and Audi"]=true;
console.log(Cars);
console.log(i**i);
console.log(a/i);
if (i!=a) //comment i is not equal a.
{console.log('"i ne dorivnue a"')};
console.log(i===a);
console.log(pens==pencils);
let x=18;
let result=x===18
? console.log("'x virno'")
: console.log("'x nevirno'");
if (x>i || x>=a){console.log("'X ye bilshe'")}
else {console.log("'X NE ye bilshe'")};
const day="2";
switch (day){
case "1": {console.log("Monday");
} break;
case "2": {console.log("Tuesday");
} break;
case "3": {console.log("Wednesday");
} break;
case "4": {console.log("Thursday");
} break;
case "5": {console.log("Friday");
} break;
case "6": {console.log("Saturday");
} break;
case "7": {console.log("Sunday");
} break;
default: {
    console.log("Incorrect");
}
}