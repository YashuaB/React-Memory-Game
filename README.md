
# React-Memory-Game
Is a restaurant app that lets users input the names of burgers they'd like to eat then stores them in a database for later consumption.


## Demo

Demo of app: [Memory-Game](https://yashuab.github.io/React-Memory-Game/)

## Built With
Node.js
React

### Prerequisites
Things you need to install the software and how to install them

```
Node.js
React
```
### Installing
To run the application locally, first clone this repository with the following command.
```
git clone https://github.com/YashuaB/React-Memory-Game.git
```
Next, install the application dependencies.

```
cd memory-game-app
npm install
npm start
```


Now, open the local application on port 3000 at the URL: http://localhost:3000/.

Congrats! The app is now ready to use!

How does it work?

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game restarts.
