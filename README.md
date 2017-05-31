# 361ProjectB - Selfie Scope

### This JavaScript node application allows users to search social media photos and videos for missing persons. To run this application, follow the instructions below to install JavaScript node and set up the database.


#### Clone repository
git clone https://github.com/gross-micah/361ProjectB.git


#### Create database using data definition queries
https://github.com/gross-micah/361ProjectB/blob/master/database-files/data-definition.sql


#### Add your database information into the dbcon.js file
cp dbcon.js


#### Import node modules
npm install express

npm install express-handlebars

npm install mysql

npm install express-session

npm install body-parser

npm install request

npm install forever

//for unit testing

npm install mocha 


#### Start the node server
node server.js <port_number>
