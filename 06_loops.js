/*
 * Project:     cc_javascript_intro
 * File:        06_loops.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates the concepts of loops and iterations.
 */

function js06_loops() {

    demoForLoop(4);
    demoWhileLoop(8);
    demoDoWhileLoop(7);
    demoForLoopThroughArray();
}


// demonstrating the "for loop"
function demoForLoop(max)
{
    /*
     * The for loop can be used to process iterative tasks. It consists of an initialization, a condition and an increment statement, as well as the statements that get executed during each iteration.
     *
     * for (initialization; condition; increment)
     * {
     *     statements
     * }
     */

     for (var i = 0; i < max; i++)
     {
         console.log(i);
     }
}


// demonstrating the "while loop"
function demoWhileLoop(max)
{
    /*
     * The while loop can be used to process iterative tasks as long as a certain condition is met. It consists of a conditional statement, the statements that get executing during each iteration as well as potentially an increment statement.
     *
     * Note: A loop that will never exit and run forever is called "infinite loop" ("endless loop").
     *
     * while (condition)
     * {
     *   statements
     *
     *   increment statment
     * }
     */

     var i = 0;
     while (i < max)
     {
         console.log(i);   // statement(s)
         i++;              // increment statement (i = i + 1);
     }
}


// demonstration the "do-while loop"
function demoDoWhileLoop(max) {

    /*
     * The do-while loop is similar to the while loop, features however one significant difference: It executes its statements at least, before it starts checking the conditional statement.
     *
     * Note: A loop that will never exit and run forever is called "infinite loop" ("endless loop").
     *
     * do {
     *   statements (always executed at least once!)
     * } while (condition);
     */

    var i = 0;
    do {
        console.log(i);
        i++;
    } while (i < max);
}


function demoForLoopThroughArray()
{
    // array declaration and initialization
    var myArray = [4, 8, 15, 16, 23, 42];

    // iterating through all elements (indexes) in the array
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
