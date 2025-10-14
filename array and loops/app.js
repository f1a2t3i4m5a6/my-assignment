//Question :01
let arr1 = [2,4,2,5,6,4,7]
let final = []
for(let i=0;i<arr1.length;i++){
    if(!final.includes(arr1[i])){
        final.push(arr1[i])
    }
}
console.log(final)
//Question :02
let arr2=["a","b","e","a","t","o","u","a"]
let vowels = ['a','e','i','o','u']
let count =0
for(let i=0;i<arr2.length;i++){
    if(vowels.includes(arr2[i])){
        count++
    }
}
console.log(arr2)
console.log("Total vowels are",count)
//Question :03
let arr3=[1,2,3,4,5,6,7,8]
let even=0;odd=0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2===0)even++;
    else odd++;
}
console.log(arr3)
console.log("Even numbers are",even,"Odd numbers are",odd);
//Question :04
let arr4=[1,2,2,3,4,3,3,5]
let frequency=[]
for(let i=0;i<arr4.length;i++){
    let num=arr4[i]
frequency[num]=(frequency[num] || 0)+1;
}
console.log(arr4)
console.log(frequency)
//Question :05
let arr5=[10,20,30,40,50]
let reversed=[]
for(let i=arr5.length-1;i>=0;i--){
reversed.push(arr5[i])
}
console.log(arr5)
console.log(reversed)
//Question :06
let words=["apple","banana","grape","pineapple"]
let longw=words[0];
for(let i=1;i<words.length;i++){
    if(words[i].length>longw.length){
        longw=words[i]
    }
}
console.log(words)
console.log("Longest word",longw)
//Question :07
let arr7=[2,-3,5,-7,8,-1,4]
let sum=0
for(let i=0 ; i <arr7.length;i++){
    if(arr7[i]>0)sum+=arr7[i];
}
console.log(arr7)
console.log("Sum of positive numbers:",sum)
//Question :08
let arr8=[1,2,3,2,4,2,5]
let result=[]
for(let i=0;i<arr8.length;i++){
    if(arr8[i] !==2){
        result.push(arr8[i])
    }
}
console.log(arr8)
console.log(result)
//Question :09
let arr9=[20,60,45,75,10,90]
for(let i=0;i<arr9.length;i++){
    if(arr9[i]>50){
        console.log(arr9[i])
    }
}
//Question :10
let arr10a=[1,2,3,4]
let arr10b=[3,4,5,6]
let merged=arr10a.concat(arr10b)
let unique=[]
for(let i=0;i<merged.length;i++){
    if(!unique.includes(merged[i])){
        unique.push(merged[i])
    }
}
console.log(arr10b)
console.log(arr10b)
console.log(unique)
//Question :11
let arr11=[3,-1,-7,4,-2,9]
let negativec=0;
for(let i=0;i<arr11.length;i++){
    if(arr11[i]<0)negativec++;
}
console.log(arr11)
console.log("Negative numbers count to be",negativec)
//Question :12
let arr12=[2,3,4,5,6,7,8,9,11]
console.log(arr12)
for(let i=0;i<arr12.length;i++){
    let nums=arr12[i]
    let isPrime=nums>1
    for(let j=2;j<nums;j++){
        if(nums%j===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime)console.log(nums)
}

//Question :13
let arr13=[15,9,10,20,33,45,50]
console.log(arr13)
for(i=0;i<arr13.length;i++){
    if(arr13[i]%3===0 && arr13[i]%5===0){
        console.log(arr13[i])

    }
}

//Question :14
let arr14=[45,12,78,3,56,1]
let smallest=arr14[0]
for(i=1;i<arr14.length;i++){
    if(arr14[i]<smallest){
        smallest=arr14[i]
    }
}
console.log("Smallest number =",smallest)

//Question :15
let arr15=["Apple","mango","banana","orange","grapes"]
countword=0
for(i=0;i<arr15.length;i++){
    let word=arr15[i]
    if(word.includes('a')||word.includes('A')){
        countword++
    }
}
console.log(arr15)
console.log("Words containing 'a' or 'A' : ",countword)