const express = require("express");
const app = express();
const port = 443;
const path = require("path");
app.set("view engine","ejs");
app.set("views","./view");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res) {
    res.render("home"); 
});


app.listen(3000);