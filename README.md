# h4ievaluation-template

Welcome to the template of the Hack4Impact Impact Team Evaluation Project. 

Our goal for you is to apply some of the topics learned within the Junior Development Team while also getting a chance to learn a bit more by exploring on your own. 

Thus, the objective is to build a Todo-list application in React / Flask where the user can add and delete todos while also persisting these upon browser close. Below we will describe in more detail how we want you to approach this



## Project Structure

Don't worry about the files that are not listed below, that means you won't need to use them

```
└── client                              # Contains all the front end (React) code
    ├── public                          # Some public files, don't need to touch this 
    └── src                             # Contains the JS src files that you will need to alter
        ├── App.js                      # Main file that React Renders, don't need to touch this as it renders the TodoList component that we give 
        │── api.js                      # Contains functions to make get/post requests to backend
        └── components                  # Contains main TodoList.js and you should add any other components you may use
            ├── TodoList.js             # Renders todo-list and your add / delete functions should be contained here, as well as displaying todo
                                        # All non code related documents
├── server                              # Contains all the backend (Flask) code
    └── app.py                          # Main file that will contain all your routes and database logic
```





## Things to consider

### 1. Connecting our front-end (React) to our back-end routes 

The Todo-list.js component imports get and post functions from the api.js which allow you to specify which route you want to make an HTTP Request to. 

For example, suppose I have a GET route on the back-end at "/test", in order to make a request from the front-end, I will need to use the get function as follows
```bash
get("/test")
.then(resp => {

}).catch(err => {

})
```

Notice the .then and .catch blocks after the get function. Those allow you to handle the two scenarios that occur: either a succesful response from our server which will trigger the .then(resp => {}) OR an error occurs which will trigger the .catch block. You can think of this similar to an if-else statement. 

The resp variable that is passed into the .then is an object that contains the data returned from the server. Your specific data can be accessed by calling resp.data. 

Now for the Todo-list, think about when we need to make GET requests (which strictly return data) and POST requests (which are used to store data). 

### 2. Storing, retrieving, and deleting Todos with Database 

I know we haven't spent much time delving into databases, so we will provide you with the necessary configuration to set this up. 

We need to install MongoDB, if we haven't already installed it. You can check if you already have MongoDB by opening up a Terminal / Command Prompt / Powershell by typing in the command `mongo --version`

Mac Installation of Mongo using Homebrew (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Homebrew was installed in first JDT lecture, check if this exists with brew --version, if not presented with a version number then install at https://docs.brew.sh/Installation

1. Open up a terminal instance and type in command `brew tap mongodb/brew` 
2. Then type in command `brew tap | grep mongodb` 
3. Then `brew install mongodb-community@4.4`
4. Run `brew services start mongodb-community@4.4`
5. Now you can check if the installation worked by using `mongo` command 


Windows installation of mongo (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/)


We will use Flask-PyMongo (https://flask-pymongo.readthedocs.io/en/latest/)

For the sake of this project all you have to know is that in order to reference the collection you can call mongo.db.{insert collection name here} for example, mongo.db.todos and then you can reference the documentation (https://flask-pymongo.readthedocs.io/en/latest/) for the specific functions you will need to use.

To check local mongo database to see if you have properly stored a todo
1. Open a terminal instance and run `mongo` command
2. In the mongo shell, run `show dbs` to show all the databases available
3. You should see a database named "myDatabase", if you haven't saved anything to the database yet, it may not show up
4. To use this database, run `use myDatabase` 
5. Then you are able to run any of the mongo query commands 

## Running the Code 

Navigate to the client and server directory and open up the respective README for installation and run commands
