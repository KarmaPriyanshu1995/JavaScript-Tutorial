// 1. Program to find longest word in a given sentence ?
// 2. How to check whether a string is palindrome or not ?
// const NAME = "PRIYANHSU";
// const length = NAME.length;
// let isPalindrome = true;

// for (let i = 0; i < length / 2; i++) {
//     if (NAME[i] !== NAME[length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     console.log("Palindrome");
// } else {
//     console.log("Not");
// }

// 3. Write a program to remove duplicates from an array ?
// const arr =[1,2,3,3,4,5,3,5,4,2]
// const length =arr.length
// let temp =[]
// for(let i =0 ;i<=length-1;i++){
//     let isDuplicate = false;
//     for(let j=0;j<=temp?.length;j++){
//         if(arr[i] === temp[j]){
//            isDuplicate = true;
//            break
//         }
//     }
//     if(!isDuplicate){
//         temp[temp.length] = arr[i]
//     }
// }
// console.log(temp)


// 4. Program to find Reverse of a string without using built-in method ?

// 5. Find the max count of consecutive 1’s in an array ?
// 6. Find the factorial of given number ?
// function factorial(num){
// if(num === 0){
//     return 1;
// }else{
//     return num * factorial(num-1)
// }

// }
// console.log(factorial(5))

// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
// let arr1=[0,3,4,31]
// let arr2=[4,6,30]

// const arr3 = [...arr1,...arr2]
// for(let i=0;i<=arr3.length;i++){
//    for(let j=i+1;j<=arr3.length;j++){
//     if(arr3[i]>arr3[j]){
//     let temp = arr3[j]
//     arr3[j]=arr3[i]
//     arr3[i]=temp
//    }
// } 
// }
// console.log(arr3)
// 8. Create a function which will accepts two arrays arr1 and arr2.
//  The function should return true if every value in arr1 
// has its corresponding value squared in array2. The frequency of values must be same.
// function solution(arr1,arr2){
 

// }
// console.log(solution([1,2,3],[1,4,9]))

// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
// 11. Write a JavaScript program to find the maximum number in an array.
// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// 13. Write a JavaScript function to check if a given number is prime.
// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.
// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}
// 1. Reverse a String
// 2. Check if a String is a Palindrome
// 3. Remove Duplicates from a String
// 4. Find the First Non-Repeating Character
// 5. Count the Occurrences of Each Character
// 6. Reverse Words in a Sentence
// 7. Check if Two Strings are Anagrams
// 8. Find the Longest Substring Without Repeating Characters
// 9. Convert a String to an Integer (atoi Implementation)
// 10. Compress a String (Run-Length Encoding)
// 11. Find the Most Frequent Character
// 12. Find All Substrings of a Given String
// 13. Check if a String is a Rotation of Another String
// 14. Remove All White Spaces from a String
// 15. Check if a String is a Valid Shuffle of Two Strings
// 16. Convert a String to Title Case
// 17. Find the Longest Common Prefix
// 18. Convert a String to a Character Array
// 19. Replace Spaces with %20 (URL Encoding)
// 20. Convert a Sentence into an Acronym
// 21. Check if a String Contains Only Digits
// 22. Find the Number of Words in a String
// 23. Remove a Given Character from a String
// 24. Find the Shortest Word in a String
// 25. Find the Longest Palindromic Substring
// 1. map()
// Q1: How would you use map() to return an array of squares from [2, 4, 6]?
// const arr = [11, 98, 31, 23, 944]
// const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"]
// const clubMember =[
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]
// const matrixView =[
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const name = "Bob Ziroll"
// arr.map((item,index)=>{
//     console.log(item*item)
// })
// 2. filter()
// Q2: Given an array of numbers, how can you use filter() to return only the even numbers?
// const isEven=(num)=>{
// return num%2 == 0
// }

// const greaterThanHundred=(num)=>{
// return num <= 100
// }
//Given an array of numbers, return a new array that has only the numbers that are 5 or greater. 
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const lengthGreaterThatFive =(num)=>{
//     return num.length >= 5
// }
// const filterValue = stringArray.filter(lengthGreaterThatFive)
// console.log(filterValue)

// 3. reduce()
// Q3: Write a reduce() function to calculate the sum of all numbers in the array [10, 20, 30].

// 4. forEach()
// Q4: Explain the difference between forEach() and map(). Why does forEach() not return a new array?

// 5. some()
// Q5: How can you use some() to check if any element in an array is greater than 100?

// 6. every()
// Q6: Use every() to check if all values in an array [3, 6, 9] are divisible by 3.

// 7. find()
// Q7: Write a find() method to return the first string in an array longer than 5 characters.

// 8. findIndex()
// Q8: How do you use findIndex() to return the position of the first negative number in an array?

// 9. includes()
// Q9: What will ['apple', 'banana'].includes('Apple') return? Why?

// 10. push() and pop()
// Q10: How do push() and pop() modify the original array? Provide an example.

// 11. shift() and unshift()
// Q11: Demonstrate the usage of shift() and unshift() on the array [1, 2, 3].

// 12. splice()
// Q12: How can you use splice() to remove the second element from [10, 20, 30, 40]?

// 13. slice()
// Q13: What is the result of array.slice(1, 3) on [100, 200, 300, 400]? Does it mutate the original array?

// 14. concat()
// Q14: How do you merge two arrays [1, 2] and [3, 4] without modifying either using concat()?

// 15. sort()
// Q15: Why does [5, 10, 1].sort() return [1, 10, 5] instead of [1, 5, 10]? How can you fix it?

// 16. reverse()
// Q16: What will be the output of [1, 2, 3].reverse()? Is the original array modified?

// 17. flat()
// Q17: Use flat() to convert [1, [2, [3, [4]]]] into a one-dimensional array.

// 18. fill()
// Q18: What is the output of new Array(3).fill(0) and how can you use fill() to replace all values in [1,2,3,4] with 9?

// 19. indexOf() and lastIndexOf()
// Q19: How are indexOf() and lastIndexOf() different? When would you use each?

// 20. Array.isArray()
// Q20: How do you check if a given value is truly an array and not an object or string?


//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const haveClubMember =(num)=>{
// return num.member === true
// }

// const filteredData = clubMember.filter(haveClubMember)
// console.log(filteredData)
//Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

// const canSeeMatrix =(num)=>{
//     return num?.age > 18
// }

//  const filteredData = matrixView.filter(canSeeMatrix)
//  console.log(filteredData)


const a =[1,2,3,3,2,1,1,2]
let obj={}
// let maxKey = null;
// let maxCount = 0;
//  for(let i=0;i<=a.length-1;i++){
//    obj[a[i]] = (obj[a[i]] || 0) + 1;
//    if (obj[a[i]] > maxCount) {
//         maxCount = obj[a[i]];
//         maxKey = a[i];
//     }
//  }

// for(const num of a){
//     obj[num] =obj[num]? obj[num]+1:1
   
// }
// console.log({ [maxKey]: maxCount });

// for(let nums of a){
//    obj[a[nums]]= (obj[a[nums]] || 0)+1
// }

// console.log(obj)