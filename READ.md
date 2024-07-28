# Express-and-Mongo-Basics
This repo is the collection of small task that i did while I learnt Backend from freeCodeCamp

# Basic Node and Express

- You can apply Middleware at any specific route but when you use `app.use()` it is global for all

# MongoDB and Mongoose

- First Install Mongo and Mongoose in your machine/project.
- First import mongoose `require('mongoose')` and then connect to your local database via `.connect(URL)`.
- MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- While making a Schema, make sure to complie it using `mongoose.model('anyName',SchemaName)`

## Each Database has a Unique Schema which does not override (mean that if you try to re-define scheme from another project, it may not work.)