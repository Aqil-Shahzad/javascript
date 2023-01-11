// "use script"

// //IN Function Declration Functionn can be called before declration
// const age1=culcAge1(1991);
//  console.log(age1);

// //Function Declration
//  function culcAge1(birthyear)
//  {
//   return 2037-birthyear;
//  }
 

//  //Function Execution
//  //IN Function Execution Functionn can be called before declration
//  const culcAge2=function (birthyear)
//  {
//     return 2037-birthyear;
//  }
// const age2=culcAge2(1991)
//  console.log(age2);

// let element=document.getElementById("Navigation");
// let element=document.getElementsByClassName("content");
// let element=document.getElementsByTagName("li");
let element=document.getElementById("Navigation").getAttribute("class");


console.log(element);