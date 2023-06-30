const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const env = require()

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Y+4-p7?yP#QdYpAu&d_j8W^tskXfh',
  database: 'sys'
});

connection.connect();

let events = 
[
  {
    id: 1,
    name: 'Charity Ball',
    category: 'Fundraising',
    description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
    ],
    location: '1234 Fancy Ave',
    date: '12-25-2019',
    time: '11:30'
  },
  {
    id: 2,
    name: 'Rescue Center Goods Drive',
    category: 'Adoptions',
    description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    location: '1234 Dog Alley',
    date: '11-21-2019',
    time: '12:00'
  },
  {
    id: 3,
    name: "Charity Walk for Children's Hospital",
    category: "Fundraising",
    description: "Join us for a charity walk to raise funds for children's hospital. The event will feature a 5K walk, live music, food trucks, and much more.",
    featuredImage: "https://placekitten.com/600/600",
    images: [
      "https://placekitten.com/600/600"
    ],
    location: "Central Park",
    date: "2023-07-15",
    time: "10:00"
  }
  
];

app.get('/expenses', (req, res) => {
  connection.query('SELECT e.id, e.location, e.date, SUM(i.price) AS total_price FROM expenses e JOIN items i ON e.id = i.expense_id GROUP BY e.id;', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

app.get('/events', (req,res) => {
    res.send(events);
})

app.get('/items/:expense_id', (req, res) => {
  let expense_id = Number(req.params.expense_id)
  connection.query(
    'SELECT items.name, items.price, items.quantity from items WHERE expense_id = ?',
    [expense_id],
    (err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.json(results)
      }
    }
  )
})

app.get('/categories', (req,res) => {
  // let period = String(req.params.period)
  connection.query(
    'SELECT categories.name, SUM(items.price) FROM items JOIN expenses ON expenses.id=items.expense_id JOIN categories ON categories.id=items.category_id GROUP BY categories.name', (err, results) => {
      if (err) {
        console.error(err)
      } else {
        res.json(results)
      }
    }


  )
})


app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
  });

// listen on the port
app.listen(port);