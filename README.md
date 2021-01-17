# Name Application - A Recruitment Task

The task was to implement a name application which has a back end and a front end. My implementation has the Node.js back end and a React front end created with create-react-app.

### Node.js Back End

[The back end](https://github.com/jiiaa/name_application/tree/master/backend "Name Application back end") provides an file API and a database API.

The endpoints return:

1. List of all names and amount of each name sorted by amount, most popular first.
2. List of all names and amounts of each name in aplhabetical order
3. The total amount of all the names (sum of amounts)
4. The amount of the name given as a parameter

### React Front End

[The front end](https://github.com/jiiaa/name_application/tree/master/frontend/react-front "Name Application front end") has a header with navigation and two views, one for the file API and the other for the database API of the back end.

Both views are identical including the sections for

1. The total amount of all the names.
2. The form for requesting the amount of a given name.
3. The table of all the names and the amounts + the button for changing the sorting (alphabetically or by popularity)

### Technology Stack

##### Back End
* Node.js
* Express
* Dotenv
* pg PostgreSQL client
* Postgres
* fs file-system 

##### Front End
* React
* React Hooks
* Axios
* CSS