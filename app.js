const sha256 = require('crypto-js/sha256');

const Block = require('./block');

// Setting up our block
let block = new Block('Project_2 validateBlock');
block.time = new Date().getTime().toString().slice(0, -3);

/* 
    printing out our block
    notice 'hash' property is empty
    output is
    {"hash":"","height":0,"time":"1541446070","body":"Project_2 validateBlock"}
*/

console.log(JSON.stringify(block));

/*
    now we will calculate the SHA256 based on
    the block content (don't forget thath 'hash' is empty and part of the block content)
*/

block.hash = sha256(JSON.stringify(block)).toString();

/* 
    printing out our block
    notice 'hash' property is empty
    output is
    {"hash":"a1edc4ed4af582f4108b5b254b7aea90a489dd191470143b268229ca652cad18","height":0,"time":"1541446300","body":"Project_2 validateBlock"}
*/

console.log(JSON.stringify(block));


/*
    in project2, one of the requirements is to validate a block
    the way to do that (as stated in the project) is to get the block
    first, then store it's current hash and then hash the block and compare
    the current hash you stored with the result of the hasing. If they match
    then it's valid, otherwise it's invalid. You should bear in mind that 
    the block got it's SHA256 based on it's content (which "hash" property is part of).
    Any change to it's content would result in a completly defferent SHA256
*/

let currentlyStoredHash = block.hash;

let hashForValidation = sha256(JSON.stringify(block)).toString(); // thish will give is a different hash than the one on line 23 (because 'hash' property has some value)

if (currentlyStoredHash === hashForValidation) {
    console.log('Block is valid 😊');
} else {
    console.log('Something is wrong 😥');
}

/*
    one way to overcome this is to set the 'hash' property for the block
    to empty (same as it was before), and then calculate SHA256.
*/

block.hash = ''; // <----- this ought to do it

hashForValidation = sha256(JSON.stringify(block)).toString(); // thish will give is a different hash than the one on line 23 (because 'hash' property has some value)

if (currentlyStoredHash === hashForValidation) {
    console.log('Block is valid 😊');
} else {
    console.log('Something is wrong 😥');
}