import express from 'express';
const app = express();
const port = 3000;
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
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
app.use('/comments', commentRoutes);

//lancer le serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé :  http://localhost:${port}`);
})