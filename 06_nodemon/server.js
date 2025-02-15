import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.send(`
                <h1>Hello World, it works!</h1>
                <p style='font-size: 30px'>You can visit this <a href='http://localhost:${PORT}/calculator'>URL</a> to test our calculator</p>
            `);
});

app.get('/calculator', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/calculator', (req, res) => {
    const num1 = +req.body.num1;
    const num2 = +req.body.num2;
    res.send(`<h1>La sommme est : ${num1 + num2}</h1>`);
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})