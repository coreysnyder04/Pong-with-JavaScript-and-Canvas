The game of Pong using HTML5 & JavaScript
=========================================

This code is a result of a talk I gave on how simple it is to create a game using HTML5 Canvas & JavaScript.

I wrote the code in an object-oriented fashion so the game exists in 3 classes:
 * Pong - The Game logic. I starts creates the player and paddle instances and keeps track of wins/losses
 * Paddle - A simple paddle class. It handles moving an drawing the paddle
 * Player - Extends the Paddle class and adds an 'mousemove' event for following the mouse

There are many improvements to the code which I could have made such as externalizing the ball to its own class or creating better collision detection.
These improvements weren't made to keep the talk short since I had under a half hour to present everything and I wanted to make sure everyone could quickly understand the code.

You're welcome to fork my code and add in new features or fix bugs! If you walk to talk to me about HTML5, JavaScript, or Game Development you can find me on twitter @coreysnyder