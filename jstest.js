/* Q1. What are entry conrol loops and exit control loops?
Ans : Entry controlled loops are that kind of loops which check the entry of loop by checking condition before running the statements as like our for and while loop they first check of there condition that there situation is matching it or not for example 
while(n > 5)
{
    console.lg("hello" + n);
}
it will first check that if n is > 5 if it does not match condition nothing will be printed
where as Exit controlled loops are those loops which check condition after running the statement this is done when we want our code to atleast run once and then check the condition the example of exit controlled loop is do while loop 
do{
    console.log("hello" + n);
}
while(n>5);
this loop will make its first move and then check if the condition is matching or not this can be helpful in many situatuions
*/
/*
Q2 : Write the output of the following question:-

         for (let i = 1; i <= 3; i++) { 
         for (let j = 1; j <= 3; j++) { 
         if (i === j) continue; 
         console.log(i + j); } 
        }
Ans : 
3
4
3
5
4
5




Q3. Write the output of the following question:-
        let found = false; 
        for (let i = 1; i <= 3; i++) { 
        for (let j = 1; j <= 3; j++) { 
        if (i * j > 4) { 
        found = true; break; 
   } 
       console.log(i, j); 
} 
      if (found) break; 
}
Ans:
//there is no space between i and j. I had given it just for clarrification of difference
1 1 
1 2
1 3
2 1
2 2
//our found become  true and we have ended our all loops



Q4. Write the output of the following question:-
let pattern = ''; 
 for (let i = 1; i <= 5; i++) { 
for (let j = 1; j <= i; j++) {
 pattern += '*';
 } 
pattern += '\n';
 }
 console.log(pattern);


 Ans : 
 *
 **
 ***
 ****
 *****
*/
/* 
Q5. 
* * * * * 
   * * * * 
      * * * 
         * * 
            * 

*/
//code for Q 5
function Q5() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i - 1; j++) {
            pattern += " ";
        }
        for (let j = 1; j <= 5 - (i - 1); j++) {
            pattern += "*";
        }
        pattern += '\n';
    }
    console.log(pattern);
}
// Q5();
// Q6.  Write a js Program for finding Prime Numbers between 1-100.
function findprime(n) {
    for (let i = 2; i <= n; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {

            console.log(i);
        }
        else if (i == 2 || i == 3 || i == 5 || i == 7) {
            console.log(i);
        }
        else {
            continue;
        }
    }
}
// findprime(100);
/*code for anybase to anybase number system conversion ?*/
function anybasetoanybase(currentbase, desiredbase, num) {
    let newnum = 0;
    let counter = 0;
    
    if(currentbase!=10)
    {
        let resnum = 0;
        let t = num;
        while(t>0)
        {
            resnum = resnum + ((currentbase**counter) * t%10);
            t = Math.floor(t/10 );
        }
        counter = 0;
        currentbase = 10;
        num = resnum;

    }
    let temp = num;

    if (currentbase == 10) {
        while (num > 0) {
            newnum = newnum + ((num % desiredbase) * Math.pow(10,counter));
            num= Math.floor(num/ desiredbase);
            counter++;
        }

    }
    return newnum;
}
// console.log(anybasetoanybase(8,2,6));
//Q9 code for anybase addditon
function anybaseaddition(num1, num2, currentbase)
{
    let  c = 0;
    let counter =0;
    let sum = 0;
    while(num1>0 || num2>0 || c>0)
    {
        let n1 = num1%10;
        let n2 = num2%10;
        sum = sum + ((n1 + n2 + c)%currentbase * Math.pow(10, counter));
        c = 0;
        c = Math.floor((n1+n2+c)/currentbase);
        counter++;
        num1 = Math.floor(num1/10);
        num2 = Math.floor(num2/10);
    }
    return sum;
}
console.log(anybaseaddition(15, 24, 8));