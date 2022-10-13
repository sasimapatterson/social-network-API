# Social Network API
Social Network API using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

1. [Descriptions](#descriptions)
2. [Installations](#installations)
3. [Testing](#testing)
4. [Tech Use](#techUse)
5. [Visuals](#visuals)
6. [References](#references)


## Descriptions
This project is about Social Networking where user can share their thoughts, react to friends' thoughts, and create a friend list. It is important as a web developer to have a good understanding of the connection between the database and the API.


## Installations
This project required the following installations.  

MongoDB is a document-oriented NoSQL database used for high volume data storage.(https://www.guru99.com/what-is-mongodb.html)

To install MongoDB please follow this link https://www.mongodb.com/docs/manual/administration/install-community/.

For routing.
```pip
  npm install express
```

To connect to a MongoDB database.
```pip
  npm install mongoose --save
```

For time formatting in timestamp.
```pip
  npm install moment --save
```

To invoke the application
```pip
  npm i
```

To start the server
```pip
  nodemon
```

## Testing
After all the routes are created the Insomnia app is used for testing the REST APIs. The APIs are grouped into two which are Thoughts and Users. 

In the Thought routes we can do the CRUD operations for thoughts as well as creating and deleting reaction which is part of the Thoughts database.

The User routes is similar to the Thought routes with the CRUD operation. Friend can be added and deleted via User routes. 

Thoughts Routes
  * <mark>GET</mark>: Get Thoughts
  * <mark>GET</mark>: Get Thought By Id
  * <mark>POST</mark>: Create Thought
  * <mark>POST</mark>: Create Reaction
  * <mark>PUT</mark>: Update Thought
  * <mark>DELETE</mark>: Delete Thought
  * <mark>DELETE</mark>: Delete Reaction

Users Routes
  * <mark>GET</mark>: Get Users
  * <mark>GET</mark>: Get User By Id
  * <mark>POST</mark>: Create User
  * <mark>POST</mark>: Add Friend
  * <mark>PUT</mark>: Update User
  * <mark>DELETE</mark>: Delete User
  * <mark>DELETE</mark>: Delete Friend

## Tech Use
  * Node.js
  * Express.js
  * Nodemon
  * JavaScript
  * MongoDB
  * Mongoose
  * Moment.js
  * Insomnia REST Client

## References
  * https://momentjs.com
  * https://mongoosejs.com

