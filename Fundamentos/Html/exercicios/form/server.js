const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/json' }));


app.use(express.json());
app.use(express.urlencoded());
app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.status(200).send('Deu bom hein');
});

app.listen(3003);

