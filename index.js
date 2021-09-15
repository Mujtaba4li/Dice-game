//randomNumber 1
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

if(randomNumber1===1)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice4.png");
}
else if(randomNumber1===5)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice5.png");
}
else if(randomNumber1===6)
{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice6.png");
}



//randomNumber 2

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

if(randomNumber2===1)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png");
}
else if(randomNumber2===6)
{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png");
}
else{}

// alert("Number '1' value is: "+randomNumber1+"Number '2' value is: "+randomNumber2);



//TO change heading
if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="🥇Player 1 is winner";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 is winner🥇";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="DRAW";
}

