# Udacity: Blockchain Developer Nanodegree Program

This simple app was made as a tip for Project 2. One of the functions required is **validateBlock**. The instruction to do so is the get the block, store it's hash, hash the block, and then compare the stored hash with the resulted hash of the block. The problem is that block hash was claculated while the *hash* property was empty, and inside **validateBlock** the *hash* property is not empty.

##### How to run the app
1. Install Node JS if you don't already have.
2. `cd` to the application root directory.
3. Install dependencies using `npm install`.
4. Run the application using this command `node app.js`.