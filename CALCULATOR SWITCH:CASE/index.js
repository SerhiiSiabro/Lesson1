// function numberIsValid (c){
//     if (isNaN(c) == true) {
//         alert("IT IS NOT A NUMBER");
//         return;
//     }
// }
function calculator (a, b, operator) {
    a = prompt("FIRST DIGIT");
    // numberIsValid(a);
    if (isNaN(a) == true) {
        alert("IT IS NOT A NUMBER");
        return;
    }
    a = Number(a);
    operator = prompt("INPUT THE OPERATOR: +,-,/,*,%,**,sqrt").toLowerCase();
    switch (operator) {
        case "+": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a+b);
            console.log("IT WAS ADDITION");
            break;
        }
        case "-": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a-b);
            console.log("IT WAS SUBTRACTION");
            break;
        }
        case "/": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a/b);
            console.log("IT WAS DIVISION");
            break;
        }
        case "*": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a*b);
            console.log("IT WAS MULTIPLICATION");
            break;
        }
        case "%": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a%b);
            console.log("IT WAS DIVISION");
            break;
        }
        case "**": {
            b = prompt("SECOND DIGIT");
            if (isNaN(b) == true) {
                alert("IT IS NOT A NUMBER");
                return;
            }
            b = Number(b);
            console.log(a**b);
            console.log("IT WAS EXPONENTATION");
            break;
        }
        case "sqrt": {
            console.log(a**(1/2));
            console.log("IT WAS SQUARE ROOT");
            break;
        }
        default: {
            console.log("INVALID OPERATOR")
        }
    }
}
calculator ();
    