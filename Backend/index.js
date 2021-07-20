const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'bcb45b2cf00546',
    host: 'us-cdbr-east-04.cleardb.com',
    password: '1cf42285',
    database: 'heroku_3c7763526e153a6',
});

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
    // testing
    // console.log("hi");
    // res.json({message: "hello"});
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

app.listen(process.env.PORT || PORT, () => {
    console.log("server running on port ${PORT}");
}); 
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });
