## Senior Project
The first version is written by Python django, last version number is 0.4.1.
<br>
From the second version, the web page is written by javascript. The last version number is 1.2.7.
<br>
We are using the third version, which is also the second offical version. Currently, the version nuber is 2.2.1.


---
####Instructions
For the server end, we have two `Node` server.<br>
One server is working on receiving data. The source code is [here](https://github.com/ZhangShiqiu1993/website/blob/master/server/node-server.js). It is based on Node and MongoDB.<br>
Make sure you have MongoDB on your machine. And run `npm install` before run this server.<br>
Use `node node-server.js` to run the data receiving server. It will create a file called `geo_data.log` to record every data it got.<br>
<br>
Another server is our website server. The link is [here](https://github.com/ZhangShiqiu1993/website/tree/master/version2).<br>
We use `expressJS` as web framework. Make sure you have `NodeJS` over 4.0 on your machine. And again, run `npm install` before run the server. Also, make sure your MongoDB service is running on port 27002 (*By default, it's using 27017, and I changed the default port*).<br>
Using `npm start` to run the server. You should be able to access to the website on `localhost:3000`.<br>
For the front page, we used `bootstrap 3` for CSS and `jQuery` for dynamic drawing the page.
