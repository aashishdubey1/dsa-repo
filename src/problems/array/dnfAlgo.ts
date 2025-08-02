

export const sortZeroAndOne = (arr:number[]):number[]=>{
    let low = 0;
    let mid = 0

    while(mid<arr.length){
        if(arr[mid]===0){
            [arr[low],arr[mid]] = [arr[mid]!,arr[low]!];
            low++;
        }
        mid++
    }
    return arr
}