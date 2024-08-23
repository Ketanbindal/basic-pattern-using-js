function simplepyramid() 
{
    for(let i = 1; i<=5;i++)
    {
        for(let j = 1; j<=5-i;j++)
        {
            process.stdout.write(" ");
        }
        for(let k = 1; k<=i; k++)
        {
            process.stdout.write("*");
                
        }
        console.log();
    }
}
simplepyramid();
function inverted_simple_pyramid()
{
    for(let i = 5; i>=1; i--)
    {
        for(let k = i;k>=1; k--)
            {
            process.stdout.write("*"); 

        }
        console.log();
    }
}
inverted_simple_piramiy()
function triangle()
{
    for(let i = 1; i<= 5; i++)
        {
            for(let j = 5-i; j>=1;j--)
            {
            process.stdout.write(" "); 
        }
        for(let k = i+(i-1);k>=1;k--)
            {
                process.stdout.write("*"); 
            }
            console.log();
        }
}
triangle();
function diamand()
{
    for(let i = 1; i<= 5; i++)
        {
            for(let j = 5-i; j>=1;j--)
            {
            process.stdout.write(" "); 
        }
        for(let k = i+(i-1);k>=1;k--)
            {
                process.stdout.write("*"); 
            }
            console.log();
        }   
        for(let i =4; i>= 1; i--)
            {
                for(let j = 5-i; j>=1;j--)
                {
                process.stdout.write(" "); 
            }
            for(let k = 1;k<=i+(i-1);k++)
                {
                    process.stdout.write("*"); 
                }
                console.log();
            }
}
diamand()
function numpyramid()
{
    let awnser = '';
    for(let i = 1; i<=5; i++)
    {
        for(let j = 1;j<=i; j++)
        {
            awnser = awnser+i;
        }
        awnser = awnser + "\n";
    }
    console.log(awnser);
}
numpyramid();
function flipped_pyramid()
{
  let n = 5;
  for(let i = 1; i<=n;i++)
  {
  
    for(let k=1; k<=n-(i-1);k++)
      {
      process.stdout.write("*"); 

    }
    console.log();
  }
}
flipped_pyramid();
function inverted_flipped_pyramid()
{
  let n = 5;
  for(let i = 1; i<=n;i++)
  {
    for(let j=1;j<=i-1;j++)
    {
      process.stdout.write(" "); 
    }
    for(let k=1; k<=n-(i-1);k++)
      {
      process.stdout.write("*"); 

    }
    console.log();
  }
}
inverted_flipped_pyramid();
function inverted_triangle()
{
  let n =5;
  for(let i =n; i>= 1; i--)
    {
        for(let j = n-i; j>=1;j--)
        {
        process.stdout.write(" "); 
    }
    for(let k = 1;k<=i+(i-1);k++)
        {
            process.stdout.write("*"); 
        }
        console.log();
    }
}
inverted_triangle();
function halfdiamond()
{
  let n = 5;
  for(let i=1; i<n*2; i++)
  {
    if(i<=n)
    {
      for(let j = 1;j<=i;j++)
      {
        process.stdout.write("*"); 
      }
    }
    else
    {
      for(let j = i;j<n*2 ;j++)
      {
        process.stdout.write("*"); 
      }
    }
    console.log();
  }
}
halfdiamond();
function flipped_half_diamond()
{
  let n = 5;
    for(let i=1; i<n*2; i++)
    {
      if(i<=n)
      {
        for(let k = n-1; k>=i;k--)
        {
          process.stdout.write(" "); 
        }
        for(let j = 1;j<=i;j++)
        {
          process.stdout.write("*"); 
        }
      }
      else
      {
        for(let k = 1; k<=i-n;k++)
          {
            process.stdout.write(" "); 
          }
        for(let j = i;j<n*2 ;j++)
        {
          process.stdout.write("*"); 
        }
      }
      console.log();
    }
}
flipped_half_diamond();
function hourglass()
{
  let n = 5;
  for(let i =n; i>= 1; i--)
    {
        for(let j = n-i; j>=1;j--)
        {
        process.stdout.write(" "); 
    }
    for(let k = 1;k<=i+(i-1);k++)
        {
            process.stdout.write("*"); 
        }
        console.log();
    }
  for(let i = 2; i<= 5; i++)
            {
                for(let j = n-i; j>=1;j--)
                {
                process.stdout.write(" "); 
            }
            for(let k = i+(i-1);k>=1;k--)
                {
                    process.stdout.write("*"); 
                }
                console.log();
            }

}
hourglass();
function flipped_number_pyramid()
{
  let n = 5;
  for(let i=1;i<=n;i++)
    {
    let res = '';
    for(let j = 1; j<=n-i;j++)
    {
      process.stdout.write(" "); 
    }
    for(let k = 1; k<=i;k++)
      {
       res = res+(i+(k-1));
    }
    console.log(res);
  }
}
flipped_number_pyramid();
function pallindrome_triangle()
{
  let n =5;
  let res = '';
  for(let i = 1; i<= n; i++)
    {
      let res = '';
        for(let j = n-i; j>=1;j--)
        {
        process.stdout.write(" "); 
    }
    for(let k = 1;k<=i;k++)
        {
          res = res+(i+(k-1));
        }
    for(let s =i-1;s>=1;s--)
    {
      res = res+(i+(s-1));
    }
        console.log(res);
    }
}
pallindrome_triangle();
let Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function alphabet_pyramid()
{
  for(let i = 1; i<=5;i++)
    {
      let res = '';
      
        for(let k = 1; k<=i; k++)
        {
            res =   res + Alphabet[i-1];
        }
        console.log(res);
    }
}
alphabet_pyramid();
function continous_alphabed_pyramid()
{
  let num = 0;
  for(let i = 1; i<=5;i++)
    {
      let res = '';
      
        for(let k = 1; k<=i; k++)
        {
            res =   res + Alphabet[num];
            num++;
        }
        console.log(res);
    }

}
continous_alphabed_pyramid(); 