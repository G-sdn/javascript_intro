/*
 * Project:     cc_javascript_intro
 * File:        03_arithmetic_operators.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates different arithmetic operations in JavaScript.
 */

function js03_arithmeticOperations() {

    // initialization
    var x = 42;
    var y = 23;

    // declaration
    var sum;
    var difference;
    var product;
    var quotient;
    var remainder;

    // arithmetic operators
    //

    // addition
    sum = x + y;
    printTextAndValue("Sum: ", sum);

    // subtraction
    difference = x - y;
    printTextAndValue("Difference: ", difference);

    // multiplication
    product = x * y;
    printTextAndValue("Product: ", product);

    // division
    quotient = x / y;
    printTextAndValue("Quotient: ", quotient);

    // modulo
    remainder = x % y;
    printTextAndValue("Remainder: ", remainder);

}


// A function to print some text and a value, as handed over in the function's parameters.
function printTextAndValue(text, value) {
    console.log(text + " " + value);
}
