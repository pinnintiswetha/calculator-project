let inputbox = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let str = "";
let a = Array.from(buttons);
a.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inputbox.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = '';
            inputbox.value = str;
        }
        else if(e.target.innerHTML == 'del'){
            str  = str.substring(0,str.length-1);
            inputbox.value = str;
        }
        else{
            str += e.target.innerHTML;
            inputbox.value = str;
        }
    })
})
