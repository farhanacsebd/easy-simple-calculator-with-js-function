const myResult = document.getElementById("myResult");


/* clear options */
function deleteMe(){
    myResult.value ='';
}

/* one by one delete options */
function delte1(){
    myResult.value = myResult.value.slice(0,-1);
}


/* Values ​​are displayed one by one in the input file */
function display(newValue){
    myResult.value += newValue;
}



/* this is the mathmatical function */
function answer(){
   
   try {
    myResult.value = eval(myResult.value);
    }
   catch{
    alert('Invalid')
    myResult.value = "";
   } 
}


function percentage() {
    debugger
    let val =0;
     /*val = parseFloat(val) / 100; */
    val = (myResult.value)*(val/100);
    val = val.toString();
    answer();
  }


/* function percentage(partialValue, totalValue) {
    
    return (100 * partialValue) / totalValue;
 }  */