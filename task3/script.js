convert=function convert(str){
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(math,chr)
    {
        return chr ? math.toUpperCase() : math.toLowerCase();
    })
}
console.log(convert('saLamNecesen'))