function eight(arr,index,string)
{
    if(index<arr.length){
        arr.splice(index,0,string)
    }
    else{
        arr.push(string)
    }
    console.log(arr)
    
}
eight( ['a','salam','b','world'], 3, "dev")