document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello, World!");

    const isNumber = (value) => {
        return !Number.isNaN(value);
    };

    const calculator = () => {
        //Prendre en compte chaque argument dans un window.prompt
        let numberOne = window.prompt("Nombre 1");
        let operator = window.prompt("Opérateur (+, -, *, /)");
        let numberTwo = window.prompt("Nombre 2");

        let parseIntNumOne = parseInt(numberOne);
        let parseIntNumTwo = parseInt(numberTwo);

        switch (operator) {
            case "+":
                if (isNumber(parseIntNumOne) && isNumber(parseIntNumTwo)) {
                    const resultSum = parseIntNumOne + parseIntNumTwo;
                    window.alert(
                        `La somme de ${parseIntNumOne} plus ${parseIntNumTwo} est égale à ${resultSum}.`
                    );
                } else {
                    window.alert("Entrer un chiffre.");
                }

                break;

            case "-":
                if (isNumber(parseIntNumOne) && isNumber(parseIntNumTwo)) {
                    const resultDiff = parseIntNumOne - parseIntNumTwo;
                    window.alert(
                        `La différence de ${parseIntNumOne} moins ${parseIntNumTwo} est égale à ${resultDiff}.`
                    );
                } else {
                    window.alert("Entrer un chiffre.");
                }
                break;

            case "*":
                if (
                    isNumber(parseIntNumOne) === true &&
                    isNumber(parseIntNumTwo) === true
                ) {
                    const resultProduct = parseIntNumOne * parseIntNumTwo;
                    window.alert(
                        `Le produit de ${parseIntNumOne} multiplié ${parseIntNumTwo} est égale à ${resultProduct}.`
                    );
                } else {
                    window.alert("Entrer un chiffre.");
                }
                break;

            case "/":
                if (
                    isNumber(parseIntNumOne) === true &&
                    isNumber(parseIntNumTwo) === true
                ) {
                    const resultQuotient = parseIntNumOne / parseIntNumTwo;
                    window.alert(
                        `Le quotient de ${parseIntNumOne} divisé par ${parseIntNumTwo} est égale à ${resultQuotient}.`
                    );
                } else {
                    window.alert("Entrer un chiffre.");
                }
                break;

            default:
                window.alert("L'opérateur n'est pas valide.");
        }
    };

    const button = document.getElementById("button");

    button.addEventListener("click", function () {
        console.log("clicked");
        calculator();
    });
});
