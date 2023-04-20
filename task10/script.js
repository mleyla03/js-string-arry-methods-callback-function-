const student1={
    name:"Leyla",
    surname:"Məmmədzadə",
    age:"19",
    point:"97"
}
const student2={
    name:"Asif",
    surname:"Haqqverdizade",
    age:"20",
    point:"90"
}

const student3={
    name:"Əfsane",
    surname:"Məmmədova",
    age:"23",
    point:"96"
}
const student4={
    name:"Jale",
    surname:"Ələkbərzadə",
    age:"25",
    point:"80"
}
//1-ci
let students=[student1,student2,student3,student4]
students.sort((x,y)=>{
return x.age-y.age, x.point-y.point
})
console.log(students)

let names=[]
function ten(arr){
    names.push(students[0].name);
    names.push(students[students.length-1].name)
    return names
}
console.log(ten(names))



