let screen = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let operations = document.querySelectorAll('[operation]')

let operationval ='';
let screenval = '';


for (items of buttons) {
    items.addEventListener('click' , (e) =>{
        buttontext = e.target.innerText;
      
        if (buttontext == 'AC') {
            screenval = '';
            screen.innerText = screenval;
        }
        else if (buttontext == '=') {
            screen.innerText = eval(screenval);
            screenval = screen.innerText;
        }
        else if(buttontext == 'DEL'){
            screenval = screen.innerText;
            let delval = screenval.slice(0,-1);
            screenval = delval;
            screen.innerText = screenval ;

        }
        else if(buttontext == '+' || buttontext == '-' || buttontext == '*' || buttontext == '/'){
            operationval = buttontext;
            screen.innerText = screenval + operationval;
            
        }
        
        else{  
            screenval = screen.innerText;
            screenval += buttontext;
            screen.innerText = screenval;
            operationval = screenval;
        }
    })
    
    
}
