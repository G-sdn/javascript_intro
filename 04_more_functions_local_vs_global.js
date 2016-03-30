/*
 * Project:     cc_javascript_intro
 * File:        04_more_functions_local_vs_global.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates more functions as well as local and global variable scopes.
 */

// global variable
// Global variables store information and can be accessed by all functions of the class they are declared in (global scope).
var globalVariable = 16;


// function to add two variables and return its sum
function add(x, y) {

    var sum = x + y;
    return sum;
}


// function to multiply two variables and return its product
function multiply(x, y) {

    return x * y;
}


function printTextAndInt(myText, myValue) {

    console.log(myText, myValue);

    // global vs local variable
    //printTextAndInt("Local variable = ", localVariable);      // not possible, because the function printTextAndInt() does not know anything about the local variable with the name "localVariable" (run time error!)
    //printTextAndInt("Global variable = ", globalVariable);    // possible, because the function printTextAndInt can reach global variables within the same class
}


function js04_moreFunctionsLocalVsGlobal() {

    // add two int variables and store it in separate variable
    var sum = add(7, 3);
    printTextAndInt("Sum: ", sum);

    // multiply two int variables and print them directly
    var x = 4;
    var y = 8;
    // the function "multiply" is called as parameter of the function "printTextAndInt"
    printTextAndInt("Product: ", multiply(x, y));


    // local variable
    // (all variables that we have declared and initialized so far)
    // Local variables store information only until the end of the function they are declared in (local scope).
    var localVariable = 15;
    printTextAndInt("Local variable = ", localVariable);

    // print global variable
    printTextAndInt("Global variable = ", globalVariable);

    return 0;
}
