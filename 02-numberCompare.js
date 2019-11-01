

function numCompare (num1 , num2){
    if (num1==num2){
        return "equal";
    }else if (num1<=num2){
        return "num1 less than or equal to num2"
    } else if (num1>=num2){
        return "num1 greater than or equal to num2"
    // } else if  (num1<num2){
    //     return "num1 less than num2"
    // } else if (num1>num2){
    //     return "num1 greater than num2"
    } else {
        return "error";
    }

}


// alert ( numCompare(7, 2));
// alert ( numCompare(2 ,7));
alert ( numCompare(7 ,7));