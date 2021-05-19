# memories-app

The memories application is a place for people to store their memories, which can include an image, some tags and a description of the memory. Users can register 
with their email or with their Google Account (using O-Auth). Users can update and delete posts, and view other peoples posts. Additionally, users may like other posts
that they enjoy. This application was built with React and Redux for state management on the front-end, with Express and a NoSQL MongoDB database on the backend. 

## Deploying the Website

The front-end can be deployed by using "cd client && npm install && npm build".
  
The back-end can be deployed  by using "cd server && npm install" for the build command and to run "cd server && node index.js" to run.

You must change the following before deployment: 
  1. The URL found in the cleint's api folder to correctly reference your backend api.
  2. The proxy within the client's package.json file to your backend api.
  3. The frontend URL within the servers's index.js file ( change the cors - accepted origin to your deployed frontend url)
  4. Add the appropriate MongoDB database options (in order to connect to the db, whether locally or through the cloud) in a process.env file.
    * add MONGODB_NAME
    * add MONGODB_USER
    * add MONGODB_PASS
    * add MONGODB_URI

    
  
