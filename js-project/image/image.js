function handleclick()
{
  let a=document.getElementById("img");

    if(a.src!=="pexels-alinaskazka-26493716.jpg")
        {
            a.src="pexels-sorrasfilms-26546430.jpg";
            console.log(a.src);
        }
        else
        {
            a.src="pexels-alinaskazka-26493716.jpg"; 
            console.log(a.src);   
        }
}