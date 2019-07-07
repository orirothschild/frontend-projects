This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
this project was created for ls-tech

the main components are as follows:
stores - the component required to hold the mobx state.it combines Actions and computed methods required for the list
index.js - component that is used to render the react application.in is able to inject the stores component into the application using a Provider componenent
App- the main application component.renders the following:

ToDoCreate - the component used to create a todolist

TodoList - component that handles actions over the list,such as Add,Delete,Save,Edit...

todoListItem - compnent that handels every task actions and state

TodoCount - used to count the amount of handeled tasks



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

### `npm run eject`

