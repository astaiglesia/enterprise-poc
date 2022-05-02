This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# zzPOC (working title)
Prototype of an order drafting business solution for drafting product mix proposals to commercial clients


## User Story
an interior designer wants to provide an estimate of their design for client to review
- the application provides a workspace for drafting proposals for client review and approval

the designer logs in and is greeted by the user Dashboard
- here we will have items like a summary of all projects, quicklinks to user saved projects, message board, calendar

Navigating to Projects queries our saved projects from the document database, rendering the list for our user to scroll through
- the project list can be filtered by order state using the filter options in the upper left corner
- click create to start a new draft opening a drop down form
- the designer enters the client's info and 
  

## Tech Snapshot
- this application will have: 
  - user authentication (currently bypassed as a guest) 
    - auth will be connected to a mongo userbase and utilize Bcrypt for hashing of secure data
  - 





A react app built with a Node+Express+Apollo Backend
GraphQL

The root folder contains:

```
/client

```




## Use Considerations
- As this is meant to be a business solution, the assumption is that the use case for this application would likely be on desktop 
- As such, it is optimized for a 1920 x 1080 viewing. 
- responsiveness of the application can be assumed for different screen/window sizes but a fully responsive mobile version is a planned stretch feature.
- ADA considerations are a point of focus for fully accessibile UI
  - accessibility best practices are efforted and ongoing, with the goal of creating a universal user experience 


## Please note: This app is in development!
- please feel free to leave constructive comments - thanks!!


## Tech Stack


## Current Features


## Planned Features / ToDo List
- mobile-responsive version
- WCAG compliance
- filter + sort project list
- build out dashboard         





## 
























## Available Scripts


To run the dev script - from the server directory run : 
### npm run dev
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
