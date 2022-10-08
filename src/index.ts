import App from "./App";

const port = process.env.PORT || 8080;

// routes will go here

App.listen(port);
console.log('Server started at http://localhost:' + port);