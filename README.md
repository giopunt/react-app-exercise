# ReactJS fundamentals

## Goal
On completion of this exercise each student will understand:
- Some basic React patterns
- Routing with [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy)
- Data fetching in React
- Forms management.

## Requirements
You need to have `node` (at least version 4.4.5) and git installed in your computer.

## Getting started:

Clone [this repository](https://github.com/leanjscom/react-app) and run `npm start`

`git clone https://github.com/leanjscom/react-app`
`cd react-course`
`yarn install`

Now you can run your application by running: `npm start`

## Exercise

1. Implement the following route http://localhost:3000/#/workshops so it renders src/components/workshop/WorkshopList. Hint, you need to edit 2 files:
  1. One file is the one where you define the <Route>. What file is that? Identify the component that is going to be the parent of WorkshopList
  2. The second file is src/components/layout/NavDrawer.js, edit the <MenuItem>

2. Refactor the last <Route> in src/components/App.js (the one that renders the "not found page"), so it uses the src/components/NotFound.js component. You can use this url for testing http://localhost:3000/#/this-page-does-not-exist

3. Refactor UserList so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a UserListContainer file with some comments and tips. Hint: You also need to change src/components/App.js

4. Refactor UserProfile so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Hint: You also need to change src/components/UserList.js

5. Implement WorkshopList and WorkshopListContainer using http://localhost:3000/data/workshops.js

6. Upgrade all the components that you can to stateless components (components as functions instead of classes). Components should be stateless components if either i) don't have state or ii) don't use a livecycle method. Further reading (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1l2u2ew)

7. Page not found (http://localhost:3000/#/this-page-does-not-exist) and http://localhost:3001/#/login should not display the NavDrawer and AppBar

8. Finish implementation of Login Component (located in src/components/Login.js). Requirements:
    1. The state of the inputs should be managed by the Login component (is that controlled or uncontrolled components?). Hint: use the onChange event in the inputs
    2. Handle the onClick button to validate the inputs. Hint: for validation you can use password: 1234 and username: reactfanboy
    3. If the validation is correct redirect the user to the home page. Hint: you need the router, to inject the router use withRouter from 'react-router-dom'.

## Extra bonus

If you have finished all the previous tasks, you can do the next ones (optional)

1. When displaying the UserList (http://localhost:3000/#/users):
  1. If the screen is LARGE (you can use { LARGE } from 'material-ui/utils/withWidth'), UserList should only take the 50% left of the view. The 50% on the right should be empty, so UserProfile (e.g. http://localhost:3001/#/users/crazytiger134) will fill that empty space without resizing UserList.
  2. If the screen is not LARGE and the url is http://localhost:3000/#/users, UserList should take 100% of the view

2. When displaying the UserProfile (e.g. http://localhost:3001/#/users/crazytiger134). If the screen is not LARGE (you can use { LARGE } from 'material-ui/utils/withWidth'), you should only display UserProfile and "hide" UserList

## Data fetching libraries

This project is using the following fetch polyfill https://github.com/github/fetchFor. There are other options if you want to change it. You can have a look to some of the available libraries here http://andrewhfarmer.com/ajax-libraries/

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
