let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value="ERROR";
            }
        }
        else if(e.target.innerText == 'C'){
            display.value = '';
        }  
        else if(e.target.innerText == 'BACK'){ 
            display.value = display.value.slice(0, -1);
        }
        else{
            display.value += e.target.innerText;
        }
    })
})