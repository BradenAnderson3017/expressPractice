const express = require('express');
const app = express();
const port = 3005;

app.use(express.static('stuff'));
app.get('/colou?r', (req, res) => {
    res.send('\ngot you\n')
})

app.get('/fly/', (req, res) => {
    res.send('\nit is true\n')
})

app.get(/.*apple$/, (req, res) => {
    res.get('\napple\n')
})

app.route('/banana/', (req, res) => {
    get.get((req, res) => {
        ('get request\n')
    })
})
app.listen(port, () => {
    console.log(`on port: ${port}`);
})