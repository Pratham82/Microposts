# Microposts

This is the CRUD application which makes use of **REST API** like dependency provided by **json-server** which works like back end for this application fetches the data from this local server. I've learned how to work with **npm**, **webpack**, and **babel**. I have used the webpack for compiling down the code that is written in **ES6** to **ES5** for making our ES6 modules work in browser as well. For bundling the code into one file I used **webpack**. For making the HTTP requests I used the **Http library** that I have previously created. This library takes care of all the **Http requests**. In this library,I have used **async await** for handling the promises. Thi application consists every concept that I have learned about vanilla JS.

![](https://i.postimg.cc/hPQBhnXw/Micropost2.jpg)

#### Features:

-   Complete CRUD Features
-   Add new Post
-   Delete Post
-   Update existing Post
-   Async await
-   HTTP requests
-   ES6 modules
-   JSON server as backend

Commands for getting started

1. First you have to get all the dependencies installed , once thats done you will get "app.bundle.js" file.

-   For building the application

```
npm install
```

2. Once the application is built then start the application using following command. The application will be started on "localhost:8080"

-   For starting the application

```
npm run start
```

3. Run JSON server along with main application this will work as the backend

-   For starting the JSON server

```
npm run json:server
```

<!-- Check out the live site [here](https://calorie-app.netlify.app/) -->
