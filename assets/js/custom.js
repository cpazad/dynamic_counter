// get elements
const input   = document.getElementById('counter');
const start   = document.getElementById('start');
const h1      = document.querySelector('.counter h1');
const bar     = document.querySelector('.counter .bar');



// Start btn event action 
start.onclick = e => {
    let counter_val = input.value;


    let ss = setInterval(() => {
        
        // Change value of h1
        h1.innerHTML = counter_val;

        // Making the bar dynamic
        let bar_width = barCount(input.value, counter_val);

        if (bar_width >= 0 && bar_width <= 30) {
            //bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `red`;
        } else if (bar_width >= 31 && bar_width <= 60) {
            //bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `blue`;
        } else if (bar_width >= 61 && bar_width <= 100) {
            //bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `green`;
        }
      
        // Bar length control
        bar.style.width = `${bar_width}%`;
      
        // Cleaing setintervel
        if (counter_val == 0) {
            clearInterval(ss);
        }
        
        // Progress bar length decrease 
        counter_val--;

    }, 1000);

}


// Bar  status  function 
function barCount(start, count) {
    return (count * 100) / start;
}



