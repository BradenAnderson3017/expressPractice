const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

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

app.route('/banana/')
    .get((req, res) => {
       console.log('get');
    })
    .put((req, res) => {
       console.log('put');
    })
    .delete((req, res) => {
        console.log('deleted');
    })

app.listen(port, () => {
    console.log(`on port: ${port}`);
})