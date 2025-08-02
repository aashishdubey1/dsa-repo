
function charFrequency(str:string){
    let obj:Record<string,number> = {}
    for(const char of str.toLowerCase()){
        if(char in obj){
            obj[char]++
        }else{
            obj[char] = 1;
        }
    }
    return obj
}

export default charFrequency