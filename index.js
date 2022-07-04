const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// app.use(express.static('views'));

app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
}); 