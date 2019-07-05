# React-Memory-Game

Clicky-Game renders different images to the screen and each image reacts to clicks. 


Live Site: https://yashuab.github.io/React-Memory-Game/


Technologies Used:
Node.js
Npm
Express
React

Install Instructions for local use:
clone repository with SSH using:
git clonehttps://github.com/YashuaB/React-Memory-Game.git
Install the dependencies stated in the package.JSON file by:
cd into memory-game-app
npm install
npm start
Congrats! The app is now ready to use!
How does it work?
The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game restarts.