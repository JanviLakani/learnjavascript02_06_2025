


// 1 concat()

// let x = "janvi"
// let y = "lakani"

// let str=x.concat(y)

// console.log(str);  // ans janvilakani


// _______________________________________________________ 

// 2 include()

// let str="hello javascript"

// let abc=str.includes("hello");

// console.log(abc);  // ans return true





// 3 indexof()

// let str="hello javascript"

// let abc=str.indexOf("java");

// console.log(abc); // indexfind kari aape

// _______________________________________________________ 
// 4 startswith()


// let str="hello javascript"

// let abc=str.startsWith("hello");

// console.log(abc);  // ans true
// _______________________________________________________ 
// 5 endswith()


// let str="hello javascript"

// let abc=str.endsWith("javascripts");

// console.log(abc);  // ans false becauseof javascrips
// _______________________________________________________ 
// 6 slice()


// let str="hellojavascript"

// let abc=str.slice(3,6);

// console.log(abc);  //  ans loj

// _______________________________________________________ 
// 7 substring()

// let str="hellojavascript"

// let abc=str.substring(3,6);

// console.log(abc);  // ans loj

// _______________________________________________________ 

// 8 substr()
// let text="hellojavascript"

// let abc=text.substr(3,6);

// console.log(abc);  
// _______________________________________________________ 

// 9 replace()
// let str="hello hello javascript"

// let abc=str.replace("hello","learn");

// console.log(abc);  // ans learn hello javascript
// _______________________________________________________ 
// 10 replaceall()

// let str="hello hello javascript"

// let abc=str.replaceAll("hello","learn");

// console.log(abc); // learn learn javascript

// _______________________________________________________ 
// 11 trim()

// let str="     hello hello javascript"

// console.log(str);


// let abc=str.trim("hello","learn");

// console.log(abc);  //ans  space remove
// _______________________________________________________ 
// 12 split()

// let str="hello hello javascript"

// let abc=str.split("");

// console.log(abc); // splite kari aapele word chutta word array form ma 
// _______________________________________________________ 
// 13 match()
// let str="hello javascript is  sdfsd is a great lenguage is"

// let abc=str.match(/is/g);

// console.log(abc);  //ans is is array
// // _______________________________________________________ 
// 14 test()  regex check 

// let str="hello hello javascript"

// let regex=/hey/

// let result=regex.test(str);

// console.log(result);   // ans ma true ke false return kare 

// // // _______________________________________________________ 
// 15 tolowercase()

// let a ="Hello Javascript";
 
// let z = a.toLowerCase();

// console.log(z);  // hello javascript

// _______________________________________________________ 

// 16 touppercase()

// let b = "hello world"

// let v = b.toUpperCase()

// console.log(b);


// __________________________________________________________ 

// string method class work 

// let str="hello world"

//slice
// console.log(str.slice(0,5));
// console.log(str.slice(-6,-1)); 
// console.log(str.slice(5,0));


// _____________________________________ 

// // substring
// console.log(str.substring(0,5));
// console.log(str.substring(-6,-1)); //not supported nagative
// console.log(str.substring(6,0)); // swapped

// _____________________________________ 

// // substr  // outed not use in substr method 
// console.log(str.substr(0,5));  
// console.log(str.substr(-6,5));  // used a start position and length

// _____________________________________  

// split 

// let str="hello world";

// console.log(str.split("")); //chutta kari aapshe

// console.log(str.split(" ")); //array ma hello and world kari aapshe 
// _____________________________________  

// match


// let str="hello world";

// console.log(str.match("llo"));
// console.log(str.match("hello"));  // hello aapshe 

// test  like exprestions

// let str="hello word";

// let patt=/hello/

// let result=patt.test("hello");

// console.log(result); 

// _______________________________________ 

// tolowercase

// let str="hello WORLD";

// console.log(str.toLowerCase());

// __________________________________________ 

// touppercase 
// let str = "hello javascript"
// console.log(str.toUpperCase());

let str="hello world"

console.log(str); // same string return karshe 


let s1=new String("hello world")

console.log(s1);  // onject return karshe last koi bhi string object j thai chhe 


console.log("amit" > "ajay");  // a to same j chhe and m karta j pela aave chhe  so amit is greater than ajay 

console.log("janvi" > "bansi");

























