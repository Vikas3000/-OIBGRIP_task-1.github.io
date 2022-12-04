let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C' ){
      string = "0"
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'BS'){
    
      let str = document.querySelector('input').value;
         let len=str.length;

        string = str.slice(0,len-1);
        
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC' ){
      string = ""
      document.querySelector('input').value = string;
    }
   

    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

