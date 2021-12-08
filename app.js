let express = require("express");
let MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
let app = express();
app.listen(3000, () => console.log("Server running on port 3000!"))