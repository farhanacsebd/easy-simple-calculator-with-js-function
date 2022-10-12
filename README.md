## Calculator
### Percentage Calculationg Codes:
```javascript
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
```