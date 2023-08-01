let string ="";

let button = document.querySelectorAll('.buttons');

Array.from(button).forEach((buttons) => {
    buttons.addEventListener('click' , (e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector('input').value=string
        }
      
         else if(e.target.innerHTML=="B"){
                string=string.slice(0,-1);
                document.querySelector('input').value= string;
         }
        else{
       
        string = string+ e.target.innerHTML;    
     


        document.querySelector('input').value= string;
        }
    })
});

