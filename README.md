# Social Network API
18 - NoSQL

## Table of Contents

1. [Descriptions](#descriptions)
2. [Installations](#installations)
3. [Testing](#testing)
4. [Tech Use](#techUse)
5. [Contributing](#contributing)
6. [Visuals](#visuals)
7. [Link](#link)

## Descriptions



## Installations
This project required the following installations.  

MongoDB is a document-oriented NoSQL database used for high volume data storage.(https://www.guru99.com/what-is-mongodb.html)

To install MongoDB please follow this link https://www.mongodb.com/docs/manual/administration/install-community/.

Express.js for routing.
```pip
  npm install express
```

Mongoose package to connect to a MongoDB database.
```pip
  npm install mongoose --save
```

Moment.js for time formatting in timestamp.
```pip
  npm install moment --save
```

## Testing
After all the routes are created the Insomnia app is used for testing the REST APIs. 

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
