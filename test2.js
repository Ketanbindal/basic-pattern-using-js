
let gradecalculate = (x)=>
{
    let grade;
    if(x>90)
    {
        grade = "A";
        
    }
    else if(x>80 && x<90)
    {
        grade = "B";
        
    }
    else if(x>70 && x<80)
    {
        grade = "C";
    }
    else if(x>60 && x<70)
    {
        grade = "D";
    }
    else if(x>50 && x<60)
    {
        grade = "E";
    }
    else
    {
        grade = "F";
    }
    return grade;
}
console.log(gradecalculate(82));

function oddnumber()
{
    for(let i=0; i<51; i++)
    {
        if(i%2==0) console.log(i);
    }
}
que 3 = 2, 4, 6, , 8, 10
function findsubstring(st, findable)
{
    let findlen = findable.length;
    for(let i =0;i <st.length-findlen;i++ )
    {
        if(st.slice(i,i+findlen)==findable)
        {
            return true;
        }
    }
    return false;
}
console.log(findsubstring("Hello", "llf"))

// que5
let object = {1: "name",3:"position",4:"type"};
object.age = "25";
console.log(object.age);
que 6
function sum(a, b)
{
    return a+b;
}
console.log(sum(5,10));
que 7
let obj = {
    name : "ketan",
    age : "20",
    greeting : function()
    {
        console.log("hello", this.name);
    },
    greeting2 : ()=>
    {
        console.log("hello", this.name);
        
    },
    greeting3 : function()
    {
       let a = ()=>
        {
        console.log("hello", this.name);
        }
        a()
    },
    greeting4 : ()=>
    {

        let a = function()
        {
        console.log("hello", this.name);
        }
        a();
    }
}
obj.greeting();
obj.greeting2();
obj.greeting3();
obj.greeting4();
function car(name, color, company)
{
    this.name = name;
    this.color = color;
    this.company = company;
}
let s = new car("x7", "black", "BMW");
console.log(s);
function fibonaci(a,b,c)
{
    if(b>c)
    {
       return 0;
    }
    console.log(a+b);
    let temp = a;
    a = b;
    b = a+temp;
    return fibonaci(a,b,c);
}
console.log(0);
console.log(1);
fibonaci(0, 1, 50);
function rotate(arr)
{
    let a = arr[arr.length-1];
    arr.pop();
    arr.unshift(a);
    return arr;
}
console.log(rotate([1,2,3,4,5]));
function mattoarray(arr)
{
    let arr2 = [];
    for(let i =0; i<arr[0].length; i++)
    {
        for(let j = 0; j<arr.length; j++)
        {
            arr2.push(arr[j][i]);

        }
        
    }
    return arr2;
}
console.log(mattoarray([[1,2,3,], [3,56,6]]));

function lowertoupper(str)
{
    let s = "";
    for(let i=0; i<str.length; i++)
    {
        s = s + String.fromCharCode(str.charCodeAt(i)-32);
        // console.log(  String.fromCharCode(str.charCodeAt(i)-32))    
    }
    // console.log(str)
    return s;
}
console.log(lowertoupper('hello'))






















