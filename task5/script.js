function clearDuplicate(arr){
    let freearry=[]
    for(let i of arr ){
        if(freearry.indexOf(i)==-1){
            freearry.push(i)
        }
    }
    return freearry
    
}
console.log(clearDuplicate([1, 2, 1, 2, 3]));
