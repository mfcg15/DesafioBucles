var impares = "", multiplos = "", secuencia = "", sigma = "", factorial = ""
var suma = 0, multiplicacion = 1

for(let i = 1; i <=20;i++)
{
   if(!(i%2==0))
   {
       impares += i+" "
   } 
}

console.log("Impares : "+impares)

for(let i = 100 ; i>=0 ; i--)
{
    if(i%3==0)
    {
        multiplos += i+" "
    }
}

console.log("Multiplos : "+multiplos)

for(let i=4; i>=-4 ; i-=1.5)
{
    if(i==-3.5)
    {
        secuencia +=i
    }
    else
    {
        secuencia += i+","
    }
}

console.log("Secuencia : "+secuencia)

for(let i=1; i<=100 ; i++)
{
    suma += i

    if(i==100)
    {
        sigma += i+"="
    }
    else
    {
        sigma += i +"+"
    }  
}

console.log("Sigma : "+sigma+suma)

for(let i=1; i<=12 ; i++)
{
    multiplicacion = multiplicacion*i

    if(i==12)
    {
        factorial += i+"="
    }
    else
    {
        factorial += i +"*"
    }  
}

console.log("Factorial : "+factorial+multiplicacion)
