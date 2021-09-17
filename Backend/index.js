const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config();

app.use(cors());
app.use(express.json());

// access to the database - update it the new database
const db = mysql.createConnection({
    user: login.env.user,
    host: login.env.host,
    password: login.env.password,
    database: login.env.database,
});

/*app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    }
);*/

var corsOptions = {
    origin: 'http://localhost:3000', //change this to actual website
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.put('/update', (req, res) => {
    const id = req.body.id
    const comments = req.body.comments

    db.query(
        "UPDATE new_reviews SET comments = ? WHERE id = ?",
        [comments, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    db.query(
        "DELETE FROM new_reviews WHERE id = ?",
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

app.get('/reviews', cors(), (req, res) => {
    db.query("SELECT * FROM new_reviews", (err,result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Grabs the most popular reviews by rating and organizes them by most popular.
// Currently grabs the top 20
// TODO: Possibly limit how many reviews we return or render on the screen at a time.
app.get('/popular', cors(),(req, res, next) => {

    db.query("SELECT * FROM new_reviews ORDER BY rating DESC LIMIT 20", (err,result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Should we add a LIMIT to reduce render time if there are a lot of results?

// Searches for the reviews with either a company name or a position that matches the query string and returns those reveiws.
app.get('/search', cors(),(req, res, next) => {

    const searchTerm = req.query.term;

    db.query(`SELECT * FROM new_reviews WHERE company = ${searchTerm} OR position = ${searchTerm}`, (err,result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/create', cors(corsOptions), (req, res, next) => {
    const company = req.body.company;
    const position = req.body.position;
    const rating = req.body.rating;
    const start_month = req.body.start_month;
    const start_year = req.body.start_year;
    const end_month = req.body.end_month;
    const end_year = req.body.end_year;
    const comments = req.body.comments;

    db.query(
        "INSERT INTO new_reviews (company, position, rating, start_month, start_year, end_month, end_year, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [company, position, rating, start_month, start_year, end_month, end_year, comments],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted");
            }
        }
    )
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`);
});


// const express = require('express');
// const PORT = process.env.PORT || 3306;
// const app = express()
// const mysql = require('mysql')
// const cors = require('cors')
//
// app.use(express.json());
// app.use(cors())
//
// // Local version
// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'password',
//     database: 'internshipreview',
// });
//
// // Heroku version
// // const db = mysql.createConnection({
// //     user: 'bcb45b2cf00546',
// //     host: 'us-cdbr-east-04.cleardb.com',
// //     password: '1cf42285',
// //     database: 'heroku_3c7763526e153a6',
// // });
//
// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   });
//
// app.get("/", (req, res) => {
//         res.send('testing2');
//     }
// );
//
// // using -am instead of m?
//
// app.put('/update', (req, res) => {
//     const id = req.body.id
//     const comments = req.body.comments
//
//     db.query(
//         "UPDATE new_reviews SET comments = ? WHERE id = ?",
//         [comments, id],
//         (err, result) => {
//             if (err) {
//             console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id
//
//     db.query(
//         "DELETE FROM new_reviews WHERE id = ?",
//         id,
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// // Look into what "next" is
// // Grabs all of the reviews in our database period.
// app.get('/reviews',(req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Grabs the most popular reviews by rating and organizes them by most popular.
// // Currently grabs the top 20
// // TODO: Possibly limit how many reviews we return or render on the screen at a time.
// app.get('/popular', (req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews ORDER BY rating DESC LIMIT 20", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Should we add a LIMIT to reduce render time if there are a lot of results?
//
// // Searches for the reviews with either a company name or a position that matches the query string and returns those reveiws.
// app.get('/search', (req, res, next) => {
//
//     const searchTerm = req.query.term;
//
//     db.query(`SELECT * FROM new_reviews WHERE company = ${searchTerm} OR position = ${searchTerm}`, (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// app.post('/create', (req, res) => {
//     const company = req.body.company;
//     const position = req.body.position;
//     const rating = req.body.rating;
//     const start_month = req.body.start_month;
//     const start_year = req.body.start_year;
//     const end_month = req.body.end_month;
//     const end_year = req.body.end_year;
//     const comments = req.body.comments;
//
//     db.query(
//         "INSERT INTO new_reviews (company, position, rating, start_month, start_year, end_month, end_year, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//         [company, position, rating, start_month, start_year, end_month, end_year, comments],
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("values inserted")
//             }
//         }
//     )
// });
//
// app.listen(process.env.PORT || PORT, () => {
//     console.log("server running on port ${PORT}");
// });


// Local Version

// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const app = express()
// const mysql = require('mysql');
// const cors = require('cors');
//
// app.use(express.json());
// app.use(cors());
//
// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'password',
//     database: 'internshipreview',
// });
//
// //TODO: Remove if not used.
// // app.get("/", (req, res) => {
// //         res.send('testing2');
// //     }
// // );
//
// // using -am instead of m?
//
// app.put('/update', cors(),(req, res) => {
//     const id = req.body.id
//     const comments = req.body.comments
//
//     db.query(
//         "UPDATE new_reviews SET comments = ? WHERE id = ?",
//         [comments, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id
//
//     db.query(
//         "DELETE FROM new_reviews WHERE id = ?",
//         id,
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// // Look into what "next" is
// // Grabs all of the reviews in our database period.
// app.get('/reviews', cors(),(req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Grabs the most popular reviews by rating and organizes them by most popular.
// // Currently grabs the top 20
// // TODO: Possibly limit how many reviews we return or render on the screen at a time.
// app.get('/popular', cors(),(req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews ORDER BY rating DESC LIMIT 20", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Should we add a LIMIT to reduce render time if there are a lot of results?
//
// // Searches for the reviews with either a company name or a position that matches the query string and returns those reveiws.
// app.get('/search', cors(),(req, res, next) => {
//
//     const searchTerm = req.query.term;
//
//     db.query(`SELECT * FROM new_reviews WHERE company = ${searchTerm} OR position = ${searchTerm}`, (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// app.post('/create', cors(),(req, res) => {
//     const company = req.body.company;
//     const position = req.body.position;
//     const rating = req.body.rating;
//     const start_month = req.body.start_month;
//     const start_year = req.body.start_year;
//     const end_month = req.body.end_month;
//     const end_year = req.body.end_year;
//     const comments = req.body.comments;
//
//     db.query(
//         "INSERT INTO new_reviews (company, position, rating, start_month, start_year, end_month, end_year, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//         [company, position, rating, start_month, start_year, end_month, end_year, comments],
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("values inserted")
//             }
//         }
//     )
// });
//
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`server running on port 3001???????????`);
// });

// Heroku Version

// const express = require('express');
// const PORT = process.env.PORT || 3306;
// const app = express()
// const mysql = require('mysql')
// const cors = require('cors')
//
// app.use(express.json());
// app.use(cors());
//
// const db = mysql.createConnection({
//     user: 'bcb45b2cf00546',
//     host: 'us-cdbr-east-04.cleardb.com',
//     password: '1cf42285',
//     database: 'heroku_3c7763526e153a6',
// });
//
// app.all('/', cors(), function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
// });
//
// //TODO: Remove if not used.
// // app.get("/", (req, res) => {
// //         res.send('testing2');
// //     }
// // );
//
// // using -am instead of m?
//
// app.put('/update', cors(),(req, res) => {
//     const id = req.body.id
//     const comments = req.body.comments
//
//     db.query(
//         "UPDATE new_reviews SET comments = ? WHERE id = ?",
//         [comments, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id
//
//     db.query(
//         "DELETE FROM new_reviews WHERE id = ?",
//         id,
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     )
// })
//
// // Look into what "next" is
// // Grabs all of the reviews in our database period.
// app.get('/reviews', cors(),(req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Grabs the most popular reviews by rating and organizes them by most popular.
// // Currently grabs the top 20
// // TODO: Possibly limit how many reviews we return or render on the screen at a time.
// app.get('/popular', cors(),(req, res, next) => {
//
//     db.query("SELECT * FROM new_reviews ORDER BY rating DESC LIMIT 20", (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// // Should we add a LIMIT to reduce render time if there are a lot of results?
//
// // Searches for the reviews with either a company name or a position that matches the query string and returns those reveiws.
// app.get('/search', cors(),(req, res, next) => {
//
//     const searchTerm = req.query.term;
//
//     db.query(`SELECT * FROM new_reviews WHERE company = ${searchTerm} OR position = ${searchTerm}`, (err,result) => {
//         if (err){
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })
//
// app.post('/create', cors(),(req, res) => {
//     const company = req.body.company;
//     const position = req.body.position;
//     const rating = req.body.rating;
//     const start_month = req.body.start_month;
//     const start_year = req.body.start_year;
//     const end_month = req.body.end_month;
//     const end_year = req.body.end_year;
//     const comments = req.body.comments;
//
//     db.query(
//         "INSERT INTO new_reviews (company, position, rating, start_month, start_year, end_month, end_year, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//         [company, position, rating, start_month, start_year, end_month, end_year, comments],
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("values inserted")
//             }
//         }
//     )
// });
//
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`server running on port ${PORT}`);
// });
