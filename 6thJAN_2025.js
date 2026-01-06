//-------------------------------FUNCTIONS----------------------------------//
//DEFINE A FUNCTION TO FIND SUM OF 2 NUMBERS//

// function sum(a , b){
//     console.log("Sum : ", a+b);
// }

// let a = Number(prompt("First number : "));
// let b = Number(prompt("Second number : "));

// sum(a , b);

//-------------------------------------------------------------------------//
//WRITE A FUNCTION TO COUNT THE NUMBER OF VOWELS IN A STIRNG//

// function vowels(str){
//     let vowelCount = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//             vowelCount++;
//         }
//     }
//     console.log(vowelCount);
// }

// let str = prompt("Give a string : ");
// vowels(str);


//-------------------------------------------------------------------------//
//SAME AS ABOVE USING ARROW FUNCTON//

// let vowels = (str)=>{
//     let vowelCount = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//             vowelCount++;
//         }
//     }
//     console.log(vowelCount);
// }

// let str = prompt("Give a string : ");
// vowels(str);


//-------------------------------------------------------------------------//
//PRINT SQUARE OF EACH VALUE USING FOREACH LOOP IN AN ARRAY//

// let arr =[1, 2, 3, 4];

// arr.forEach((val)=>{
//     console.log(val*val);
// });


//------------------------------------------------------------------------//
//UNDERSTANDING DIFFERENCE BETWEEN forEach() and map()//  

// let arr =[1, 2, 3, 4];

// let newA = arr.map((val)=>{
//     console.log("2nd loop : ");
//     return val*val;
// });

// newA.forEach((val)=>{
//     console.log(val);
// });

// arr.forEach((val)=>{
//     console.log("3rd loop : ");
//     console.log(val);
// });


//-----------------------------------------------------------------------//
//FILTER OUT ALL THE EVNE NUMBERS FROM THE ARRAY USING FILTER METHOD //

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.filter((val)=>{
    //     return val%2 === 0;
    // });
    
    // console.log("First loop :");
    // newArr.forEach((val) =>{
        //     console.log(val);
        // });

        
//-----------------------------------------------------------------------//
// FILTER OUT STUDENTS WHO SCRORED 90+ FROM A GIVEN ARRAY//

// let marks = [34, 45, 99, 90, 85, 95 ];

// let newArr = marks.filter((val)=>{
//     return val>90;
// })

// newArr.forEach((val)=>{
//     console.log(val);
// });