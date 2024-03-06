let countingValue = 0;
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counterInput = document.getElementById('counterValue');
const reset = document.getElementById('reset');


increment.addEventListener('click',(e)=>{
    countingValue += 1; 
     counterInput.value = countingValue;
     
})
decrement.addEventListener('click',(e)=>{
     countingValue -= 1;
     counterInput.value = countingValue;
})

reset.addEventListener('click',()=>{
     countingValue = 0;
     counterInput.value = countingValue;
})
