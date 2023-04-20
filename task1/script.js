var getFirst=function(array,n){
    if(array==null){
        return void 0
    }
    if(n==null){
        return array[0]
    }
    if(n<0){
        return[] 
    }
    return array.slice(0,n)
}
console.log(getFirst([1, 73, 99, 20])) 
console.log(getFirst([1, 73, 99, 20], 2)) 
console.log(getFirst([1, 73, 99, 20], 0)) 
console.log(getFirst([1, 73, 99, 20], 4))