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

app.get('/reviews', (req, res) => {
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

app.post('/create', (req, res) => {
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
