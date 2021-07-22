const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

// access to the database - update it the new database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'internship_review',
});

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    }
);

app.put('/update', (req, res) => {
    const id = req.body.id
    const comments = req.body.comments

    db.query(
        "UPDATE reviews SET comments = ? WHERE id = ?",
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
        "DELETE FROM reviews WHERE id = ?",
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
    db.query("SELECT * FROM reviews", (err,result) => {
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
    const start = req.body.start;
    const end = req.body.end;
    const comments = req.body.comments;

    db.query(
        "INSERT INTO reviews (company, position, rating, start, end, comments) VALUES (?, ?, ?, ?, ?, ?)", 
        [company, position, rating, start, end, comments], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        }
    )
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
  });