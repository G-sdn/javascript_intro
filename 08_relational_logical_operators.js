/*
 * Project:     cc_javascript_intro
 * File:        08_relational_logical_operators.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates the concepts of relational and logical operations.
 */

function js08_relationalLogicalOperations() {

    demoRelationalOperators();
    demoLogicalOperators();
}


// demonstarting some relational operators in C++
function demoRelationalOperators()
{
    // initialization of local variables
    var a = 42, b = 42, c = 23;

    // relational operators can be used to compare two values (or expressions)
    // relational operators are often involved in conditions / conditional statements

    // ==
    // is equal: checks if value a is equal to value b
    if (a == b) { console.log("a == b"); }

    // !=
    // is not equal: checks if value a is not equal to value c
    if (a != c) { console.log("a != c"); }

    // >
    // greater than: checks if value a is greater than value c
    if (a > c) { console.log("a > c"); }

    // <
    // less than: checks if value c is less than value a
    if (c < a) { console.log("c < a"); }

    // >=
    // greater than or equal: checks if value a is greater than or equal to value b
    if (a >= b) { console.log("a >= b"); }
    if (a >= c) { console.log("a >= c"); }

    // <=
    // less than or equal: checks if value a is less than or equal to value b
    if (a <= b) { console.log("a <= b"); }
    if (c <= b) { console.log("c <= b"); }
}

// demonstarting some logical operators in C++
function demoLogicalOperators()
{
    // initialization of local variables
    var a = 42, b = 42, c = 23;

    // logical operators can be used to compare the TRUE and FALSE state of expressions/conditions
    // logical operators are often used when multiple conditions need to be evaluated


    // &&
    // logical AND: checks if a condition1 (a==b) and a condition2 (c<=b) are true
    // all conditions involved have to evaluate to true!
    if ( (a == b) && (c <= b) )  { console.log("(a == b) && (c <= b)"); }  // line gets printed because all conditions are true
    if ( (a == b) && (a > b) )   { console.log("(a == b) && (a > b)"); }   // line does not get printed because condition2 evaluates to false

    // ||
    // logical OR: checks if either one of multiple conditions is true
    if ( (a == b) || (a > b) )  { console.log("(a == b) || (a > b)"); }  // line gets printed because one condition is true
    if ( (a > b) || (c > b) )   { console.log("(a > b) || (c > b)"); }   // line does not get printed because all conditions are false (none are true)

    // !
    // logical NOT: checks if a condition is false
    if ( !(a < b) )   { console.log("!(a < b)"); }   // line gets printed because the condition is false
    if ( !(a == b) )  { console.log("!(a == b)"); }  // line does not get printed because the condition is true
}
