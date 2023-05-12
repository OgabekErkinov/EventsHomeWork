let a = document.querySelector('.box'); 
let b = document.querySelector('.container');
let x = 0;
let y = 0;
console.log(x, y);
document.addEventListener('keydown',(el)=>{
    let value = el.key;
    if(el.key=="d"){
        x++;
        if(x>50){
            x=50;
        }
        a.style.transform = `translate(${x * 8}px,${y* 8}px)`;
    }
    else if(el.key == "a"){
        x--;
        if(x<0){
            x=0;
        }
        a.style.transform = `translate(${x * 8}px,${y* 8}px)`;
    }
    if(el.key=="w"){
        y--;
        if(y<0){
            y=0;
        }
        a.style.transform = `translate(${x * 8}px,${y* 8}px)`;
    }
    else if(el.key == "s"){
        y++;
        if(y>50){
            y=50;   
        }
        
        a.style.transform = `translate(${x * 8}px,${y* 8}px)`;
    }   
})
document.addEventListener('keydown',(el)=>{
    let value = el.key;
   if(value == "w"){
    a.style.borderTopColor = 'green';
    a.innerHTML = "UP!";
    
   }
   else if(value == "s"){
    a.style.borderBottomColor = 'green';
    a.innerHTML = "DOWN!";
   }
   else if(value == "a"){
    a.style.borderLeftColor = 'green';
    a.innerHTML = "LEFT!";
   }
   else if(value == "d"){
    a.style.borderRightColor = 'green';
    a.innerHTML = "RIGHT!";
   }
})
document.addEventListener('keyup',(el)=>{
    let value = el.key;
   if(value == "w"){
    a.style.borderTopColor = 'white';
    a.innerHTML = "";
   }
   else if(value == "s"){
    a.style.borderBottomColor = 'white';
    a.innerHTML = "";
   }
   else if(value == "a"){
    a.style.borderLeftColor = 'white';
    a.innerHTML = "";
   }
   else if(value == "d"){
    a.style.borderRightColor = 'white';
    a.innerHTML = "";
   }
 })

