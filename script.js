let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            try{
                if(display.value.slice(-1)!='%'){
                display.value = eval(display.value);
                }
                else{
                    display.value = eval(display.value.slice(0,-1))/100;    
                }
            }
            catch{
                display.value="ERROR";
            }
        }
        else if(e.target.innerText == 'C'){
            display.value = '';
        }  
        else if(e.target.innerText == 'BACK'){ 
            // console.log("before",display.value);
            // console.log("slice",display.value.slice(-1));
            display.value = display.value.slice(0,-1);
            // console.log("after",display.value);
        }
        else{
            display.value += e.target.innerText;
        }
    })
})