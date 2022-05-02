*This project is CURRENTLY UNDER DESIGN AND DEVELOPMENT!!*

# enterprisePOC (working title)
A product order creation solution for drafting and managing project proposals.
enterprisePOC is React+Redux/Hooks app executing GraphQL queries and mutations to a Mongo Document Store via Node+Express+Apollo server.


## User Story
an interior designer wants to provide an estimate of their design for client to review
- the application provides a workspace for drafting project proposals for client review and approval

the designer logs in and is greeted by the user Dashboard
- this will be built out to provide business flow tools like a summary of all projects, quicklinks to user saved projects, message board, calendar...

Navigating to Projects queries our saved projects from the document database, rendering A list for our user to scroll through and pick a project to manage
- the project list can be filtered by order state using the filter options in the upper left corner
- click create to start a new draft opening a drop down form


## Quick Start
hop in the dev seat and take an early test ride!

- navigate terminal to client dir
```
npm install

```

- navigate terminal to server dir
```
npm install
npm run dev

```

Running the dev script from the server directory will:
- Spin up an application instance at [localhost 3030](http://localhost:3030)
- Initialize the application server with a GraphiQL playground available at [locoalhost 5000](http://localhost:5000/graphql)


## Use Considerations
- As this is meant to be a business solution, the assumption is that the use case for this application would likely be on desktop 
- As such, it is being developed with an assumption of fullscreen viewing (1920 x 1080).
- Responsiveness of the application for different screen/window sizes has been includeed but a fully responsive mobile version is a planned iteration
- Project development with accessibility considerations are a point of focus for fully accessibile UI
  - WCAG + a11y best practices are efforted and ongoing, with the goal of creating a universal user experience 


## Please note: This app is under development!
- please feel free to message me with  constructive comments - thanks!!


## Planned Features / ToDo List
- mobile-responsive version
- WCAG compliance
- re-analyze + refactor state management
- SQL product database
  - route products to product gallery
- build out add to order functionality
- sort project list
- build out dashboard         
  - calendar
  - notes board
  - Sppotify SDK player for a customized user experience
- login functionality 
  - user document database
  - hashing security by bcrypt
- convert to scss modules to leverage Sass syntaxing
