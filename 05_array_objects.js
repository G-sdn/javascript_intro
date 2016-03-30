/*
 * Project:     cc_javascript_intro
 * File:        05_array_objects.js
 * Author:      nico
 * Created:     2016-02-20
 *
 * Description:
 * JavaScript file to illustrate the minimal basics of the JavaScript scripting language.
 * This file illustrates the concepts of arrays and objects.
 */

function js05_arrayObjects() {

      arrayDemo();
      objectDemo();
 }


function arrayDemo() {

    // Arrays are collections of multiple values ("array elements") within one variable.

    // array declaration and initialization
    var animals = ['cat', 'dog', 'moose', 'bird', 'fox'];

    // examining the single elements of an array collection
    // Note: The first index is 0, not 1!
    console.log("Index 0 = ", animals[0]);
    console.log("Index 1 = ", animals[1]);
    console.log("Index 2 = ", animals[2]);
    console.log("Index 3 = ", animals[3]);
    console.log("Index 4 = ", animals[4]);

    // assigning a new value to an array element
    animals[4] = 'wolf';
    console.log("Index 4 = ", animals[4]);

    // arrayname.length returns the amount of elements in the array
    console.log("Amount of animals = ", animals.length);

    // arrayname.push(element) adds a new element at the end of the current array
    animals.push("Octopus");
    console.log("Amount of animals = ", animals.length);

    // basic rule: arrayname.length - 1 returns the last valid array index
    console.log("Last index = ", animals.length - 1);
    console.log("Last animal = ", animals[animals.length - 1]);
}


function objectDemo() {

    // Objects are collections of multiple key-value pairs within one variable.

    // object declaration and initialization
    var zelda = { name: "The Legend of Zelda", year: 1986, developer: "Nintendo"};
    var mario = { name: "Super Mario World", year: 1990, developer: "Nintendo"};

    // individual values of an object can be access using objectname.key ("dot" notation)
    console.log(zelda.name);
    console.log(zelda.year);
    console.log(zelda.developer);

    console.log(mario.name);
    console.log(mario.year);
    console.log(mario.developer);

    // assigning new values to some keys of an existing object
    mario.name = "Super Mario 64";
    mario.year = 1996;
    console.log(mario.name);
    console.log(mario.year);

    // additing a new key-value pair to an existing object
    mario.brother = "Luigi";
    console.log(mario.brother);

    // console.log(objectname) prints all information about an object
    console.log(zelda);
    console.log(mario);
}
