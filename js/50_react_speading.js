

let arr1 = [10,20,30]

let arr2=[...arr1]

console.log("arr2",arr2);

let ans=[99,990, ...arr1 , 9990]

console.log("ans",ans);

let [a,b,c]=arr1

console.log(a);

console.log(b);


// ======== 


let person1={
    id :101,
    name : 'amit',
    age :25
}
// copy
let person2={...person1}

console.log(person2);

//marge 

let ans1 = {
age :30,
percentage : 80.5,
...person1,
address :"surat"
}

console.log(ans1);

 // distrutu
let {id,name,age} = person1;

console.log(name);






