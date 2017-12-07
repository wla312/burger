var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// using the express.static middleware to serve static content for the app from the public directory within the application directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// routes go here...

// render the main index.html file with the burgers from the burgers table
app.get("/", function(req, res){
	connection.query("SELECT * FROM burgers", function(err, data) {
		if (err) {
			return res.status(500).end();
		}
		res.render("index", { burgers: data })
	});
});

// add a burger
app.post("/api/burgers", function(req, res) {
	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result){
		if (err) {
			return res.status(500).end();
		}
		res.json({ id: result.insertId });
		console.log({ id: result.insertId });
	});
});

// update a burger to devoured
app.put("/api/burgers/:id", function(req, res) {
	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, result){
		if (err) {
			return res.status(500).end();
		} else if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});