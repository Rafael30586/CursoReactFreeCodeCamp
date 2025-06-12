const nums = [1,2,3,4,5] //Given an array of numbers, return an array of each number, squared

const map1 = nums.map((n)=>n*n)

/*Challenge 2:
Given an array of strings, return an array where the first letter of eaxch string is capitalized 
*/

const names = ["alice","bob","charlie","danielle"]

const propernames = names.map((name)=>{
    let firstLetter = name.charAt(0).toUpperCase();
    withoutThefirstLetter = name.substring(1);
    return firstLetter.concat(withoutThefirstLetter); //Mi forma de hacerlo
})

const capitalized = names.map((name)=>{
    return name[0].toUpperCase() + name.slice(1); // Bob's way
})