// function abcd() {
//     return 12;
// }
// var ans = abcd();
// var blob = await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();
// console.log(res);
// if the code runs line by line then it is synchronous
// 

async function myFunc() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

myFunc();