# MongoDB and Mongoose Challenges

- First Install Mongo and Mongoose in your machine/project.
- First import mongoose `require('mongoose')` and then connect to your local database via `.connect(URL)`.
- MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- While making a Schema, make sure to complie it using `mongoose.model('anyName',SchemaName)`

## Each Database has a Unique Schema which does not override (mean that if you try to re-define scheme from another project, it may not work.)