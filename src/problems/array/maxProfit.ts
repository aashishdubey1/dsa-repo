

export function maxProfit(arr:number[]):number{
    let minVal :number = arr[0];
    let minIndex:number = 0;
    let maxVal:number = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minVal){
            minVal = arr[i]
            minIndex = i
        }
    }
    if(minIndex == arr.length-1) return 0

    
    for(let i=minIndex;i<arr.length;i++){
        if(arr[i]>maxVal) maxVal = arr[i]
    }
    console.log(minVal,maxVal,minIndex)
    return maxVal - minVal
}