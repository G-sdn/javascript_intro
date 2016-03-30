/*
 * Project:     cc_javascript_intro
 * File:        02_statements.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates different statements in JavaScript.
 */

function js02_statements() {

    // statements

    /*
     * declaration statement
     * A variable of type "var" with the name "x" is being declared and can be accessed for the remainder to this function. However, at this point, no value have been assigned to the variable.
     */
    var x;

    /*
     * assignment statement
     * A value, concretely "7", is assigned to the previously defined variable "x". From this point, x has the value of 7.
     *
     * Within assignment statements, a common terminology is LHS = RHS:
     * "A value on the right-hand side (RHS) is assigned to a variable on the left-hand side (LHS)"".
     */
    x = 7;

    /*
     * declaration + assignment statement = initialization
     * Once a value is assigned to a variable, we say that the variable has been "initialized".
     */
    var y = 88;

    // of course, variables may change across the course of a function
    y = 3;

    /*
     * output statement
     * The values of the variables are given to the console.
     */
    console.log(x);
    console.log(y);

    /*
     * return statement
     * When called on the RHS of an assignment statement, this function will return the value of the "x" variable, consequently assigning that value to the variable of the assignment statement's LHS.
     * Return statements are optional in JavaScript. Not every function returns are value. Document/comment your code properly to easily follow what a function is doing and if it is returning a value.
     * ! The return statement is the very last statement in a function. Any code that comes afterwards will not be executed.
     */
    return x;

    // This code will never be executed.
    console.log("This text won't be printed.")
}
