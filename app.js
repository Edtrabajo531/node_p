
require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.static('public'))

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Cambio x')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
    console.log("Ejecutandose en el puerto: " + port);
});