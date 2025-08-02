

export const reverseArr = (arr:number[])=>{
    let end = arr.length-1;
    for(let i=0;i<arr.length-1;i++){
        [arr[i],arr[end]] = [arr[end],arr[i]];
        end--;
    }
    return arr;
}