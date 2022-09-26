// for buttons
const buttons = document.querySelectorAll ('button');
// for display
const display = document.querySelector('.display');
buttons.forEach(function(button){
    button.addEventListener('click',(calculate))
})

function calculate(e){
    const clickvalue = e.target.value;
    console.log(clickvalue);
   if (clickvalue === '=') {
    if(clickvalue !== '')
    display.value = eval(display.value)
     }
     else if (clickvalue === 'C')
     {
        display.value = ''
     }else(
        display.value += clickvalue
     )
}

