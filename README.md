This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Goal of this project is to create fake cash machine that calculates amount of notes required to payout desired amounts.
For given notes it should calculate amount of each note to make payout in lowest quantity of notes.
I.e. it should return $10, $20, $50, $100, $100 for $280
Otherwise it should provide errors for cases as
 - If it cannot payout due to lack of particular note 
 - If it cannot payout because given number is not natural
 Everything is wrapped into a bit modernised look of cash machine.
 

 This project was made for fun, please do not try to use it as a base of real cash machine :-)

 ## Quick start
 In the project directory run `npm i && npm run start`
 it should automatically open browser under url `http://localhost:3000`
 Have fun!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.