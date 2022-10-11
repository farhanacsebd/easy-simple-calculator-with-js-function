const myResult = document.getElementById("myResult")


/* clear options */
function deleteMe() {
    myResult.value = '';
}

/* one by one delete options */
function delte1() {
    myResult.value = myResult.value.slice(0, -1);
}


/* Values ​​are displayed one by one in the input file */
function display(newValue) {
    myResult.value += newValue;

}



/* this is the mathmatical function */
function answer() {

    try {
        myResult.value = eval(myResult.value);
    }
    catch {
        alert('Invalid')
        myResult.value = "";
    }
}

// myResult.value 
function percentage(per) {
    var finalLength = 0;
    var myString = (myResult.value).toString();
    for (var i = myString.length; i > 0; i--) {
        if (myString[i] == "+" || myString[i] == "-"  || myString[i] == "*"  || myString[i] == "/" ) {
            finalLength = i;
            break;
        }
    }

    var slicedString = myString.substr(0,finalLength);

    var symbolSliced = myString[finalLength];

    var otherSlicedString = myString.substr(finalLength+1,myString.length);

    
    var slicedSum = eval(slicedString);
    

    console.log(symbolSliced); 
    if(symbolSliced == "+"){
        var totalPercentage = slicedSum + (slicedSum * otherSlicedString/100);
    }
    else if(symbolSliced == "-"){
        var totalPercentage = slicedSum - (slicedSum * otherSlicedString/100);
    }
    else if(symbolSliced == "*"){
        var totalPercentage = (slicedSum * otherSlicedString/100);
    }
    else {
        var totalPercentage = slicedSum / (otherSlicedString/100);
    }


    myResult.value = totalPercentage;


}