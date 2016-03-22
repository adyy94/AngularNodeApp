var app = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'adyy',
    password : 'adyy',
    database : 'books',
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.get('/', function (req, res) {
    var data = {
        "Data": ""
    };
    data["Data"] = "Welcome to Book Store DEMO...";
    res.json(data);
});*/

app.get('/books', function (req, res) {
    var data = {
        "error": 1,
        "Books": ""
    };
    
    connection.query("SELECT * from book", function (err, rows, fields) {
        if (rows.length != 0) {
            data["error"] = 0;
            data["Books"] = rows;
            res.json(data);
        } else {
            data["Books"] = 'No books Found..';
            res.json(data);
        }
    });
});

app.get('/book', function (req, res) {
    var Id = req.query.id;
    console.log(Id);
    var data = {
        "error": 1,
        "Books": ""
    };
    
    connection.query("SELECT * from book where id=?",Id, function (err, rows, fields) {
        if (rows.length != 0) {
            data["error"] = 0;
            data["Books"] = rows;
            res.json(data);
        } else {
            data["Books"] = 'No books Found..';
            res.json(data);
        }
    });
});



app.post('/books', function (req, res) {
    var Bookname = req.body.bookname;
    var Authorname = req.body.authorname;
    var Price = req.body.price;
    console.log(req);
    console.log([Bookname, Authorname, Price]);
    var data = {
        "error": 1,
        "Books": ""
    };
    if (!!Bookname && !!Authorname && !!Price) {
        connection.query("INSERT INTO book (Bookname,AuthorName,Price) VALUES(?,?,?)", [Bookname, Authorname, Price], function (err, rows, fields) {
            if (!!err) {
                console.log(err);
                data["Books"] = "Error Adding data";
            } else {
                data["error"] = 0;
                data["Books"] = "Book Added Successfully";
            }
            res.json(data);
        });
    } else {
        data["Books"] = "Please provide all required data (i.e : Bookname, Authorname, Price)";
        res.json(data);
    }
});

app.put('/books', function (req, res) {
    var Id = req.query.id;
    var Bookname = req.query.bookname;
    var Authorname = req.query.authorname;
    var Price = req.query.price;
    console.log([Bookname, Authorname, Price, Id]); 
    var data = {
        "error": 1,
        "Books": ""
    };
    if (!!Id && !!Bookname && !!Authorname && !!Price) {
        connection.query("UPDATE book SET BookName=?, AuthorName=?, Price=? WHERE id=?", [Bookname, Authorname, Price, Id], function (err, rows, fields) {
            if (!!err) {
                data["Books"] = "Error Updating data";
            } else {
                data["error"] = 0;
                data["Books"] = "Updated Book Successfully";
            }
            res.json(data);
        });
    } else {
        data["Books"] = "Please provide all required data (i.e : id, Bookname, Authorname, Price)";
        res.json(data);
    }
});

app.delete('/books/:id', function (req, res) {
    var Id = req.params.id;
    console.log(req);
    console.log(Id);
    var data = {
        "error": 1,
        "Books": ""
    };
    if (!!Id) {
        connection.query("DELETE FROM book WHERE id=?", [Id], function (err, rows, fields) {
            if (!!err) {
                data["Books"] = "Error deleting data";
            } else {
                data["error"] = 0;
                data["Books"] = "Delete Book Successfully";
            }
            res.json(data);
        });
    } else {
        data["Books"] = "Please provide all required data (i.e : id )";
        res.json(data);
    }
});

app.get('*', function (req, res) {
    res.sendfile('./view/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


http.listen(8080, function () {
    console.log("Connected & Listen to port 8080");
});