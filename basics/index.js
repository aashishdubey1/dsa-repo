
// Given an array nums of size n which may contain duplicate elements, return a list of pairs where each pair contains a unique element from the array and its frequency in the array.
// You may return the result in any order, but each element must appear exactly once in the output.
function countFrequencies(arr){
    const freq = {}
    for(const el of arr){
        if(freq[el]){
            freq[el] += 1;
        }else{
            freq[el] = 1;
        }
    }
    return Object.entries(freq);    
}

console.log(countFrequencies([1, 2, 2, 1, 3]))
//////////////////////// Dumb Approach
    // const data = []
    // data.push({num:arr[0],count:0})

    // for(const arrEl of arr){
    //     const sameElIndex = data.findIndex((dataEl)=>dataEl.num == arrEl)
    //     console.log(sameElIndex)
    //     if(sameElIndex != -1){
    //         data[sameElIndex].count += 1
    //     }else{
    //         data.push({num:arrEl,count:1})
    //     }
    // }
    // return data.map((el)=>[el.num,el.count])

    // Given an array of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.

    function mostFrequentElement(nums){
        const data = countFrequencies(nums);
        let max = 0
        for(const el of data){
            if(el[1]>max){
                max = el[0]
            }
        }
        return max;
    }

    console.log(mostFrequentElement( [1, 2, 2, 3, 3, 3]))