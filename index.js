const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/dataDB", {
  useNewUrlParser: true
});

const postSchema = {
  title: String,
  content: Number,
  faculty: Number,
  assignments: String,
  resources: String,
  Library: Number,
  campus: Number,
  sports: String,
  clean: String
};

const Post = mongoose.model("Post", postSchema);


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/form.html');
  console.log("hello")
});

app.post("/", function(req, res) {
  var a = req.body.w3review;
  var b = req.body.quality;
  var c = req.body.faculty;
  var d = req.body.assignments;
  var e = req.body.resources;
  var f = req.body.Library;
  var g = req.body.campus;
  var h = req.body.sports;
  var i = req.body.clean;
  const post = new Post({
    title: a,
    content: b,
    faculty: c,
    assignments: d,
    resources: e,
    Library: f,
    campus: g,
    sports: h,
    clean: i
  });

  post.save(function(err) {
    if (!err) {
      console.log("Sucess");
      res.redirect("/");
    }
    else
    {
      console.log("error!");
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
