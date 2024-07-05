function handle(){
   a= document.getElementById("pass").value
    if(a>=90)
        {
            confirm("grade:A")
        }
        else if(a>=80 && a<=90)
        {
            confirm("Grade:B")
        }
        else if(a>=70 && a<=80)
            {
            confirm("Grade:C")
            }
        else if(a>=60 && a<=70)
            {
            confirm("Grade:D")
            }
        else if(a>=50 && a<=60)
             {
            confirm("Grade:E")
             }
        else if(a>=40 && a<=50)
             {
            confirm("Grade:F")
             }
        else
        {
            confirm("FAIL")
        }
    }
