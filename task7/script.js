let arr =[]
let sum = -1;
function seven(string, char){
    for(let i=0; i<string.length; i++){
        if(string[i]==char)
        {
            if(sum==-1){
                sum =i;
            }
            else{
                sum =sum+i
            }
        }
    }
    console.log(sum)
}
seven("salam", "a") //=> 4
//seven("salam", "z")=> -1