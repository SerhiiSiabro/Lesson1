function calculator (a, b, operator) {
    a = prompt("FIRST DIGIT");
    if (isNaN(a) == true) {
        alert("IT IS NOT A NUMBER");
        return;
    }
    a = Number(a);
    b = prompt("SECOND DIGIT");
    if (isNaN(b) == true) {
        alert("IT IS NOT A NUMBER");
        return;
    }
    b = Number(b);
    operator = prompt("INPUT THE OPERATOR: +,-,/,*,%");
    if (operator == "+") {
        console.log(a+b);
        console.log("IT WAS ADDITION")
    }
    else if (operator == "-") {
        console.log(a-b);
        console.log('IT WAS SUBTRACTION');
    }
    else if (operator == "/") {
        console.log(a/b);
        console.log('IT WAS DIVISION');
    }
    else if (operator == "*") {
        console.log(a*b);
        console.log('IT WAS MULTIPLICATION');
    }
    else if (operator == "%") {
        console.log(a%b);
        console.log('IT WAS REMAINDER AFTER DIVISION');
    }
    else  {
        alert("TYPE OF OPERATOR IS NOT CORRECT")
    }
}
calculator ();
    