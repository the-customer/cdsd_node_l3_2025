const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./routes/postRoutes');

app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.set('views', 'views');

//Routes----------
//Page d'accueil:
app.get('/', (req, res) => {
    const title = 'Accueil - Mon blog';
    res.render('index',{title});
});
// ----Routes des article
app.use('/posts', postRoutes);

//lancer le serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé :  http://localhost:${port}`);
})