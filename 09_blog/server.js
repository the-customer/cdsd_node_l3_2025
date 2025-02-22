import express from 'express';
import session from 'express-session';
const app = express();
const port = 3000;
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';

//SESSION
app.use(
    session({
        secret: "ThisIsMySecretKeyCool",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } //Il faut le remettre a true en production
    })
);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// app.set('views', 'views');

//Routes----------
//Page d'accueil:
// app.get('/', (req, res) => {
//     const title = 'Accueil - Mon blog';
//     res.render('index',{title});
// });
// ----Routes des article
app.use('/',authRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/admin',adminRoutes);


//lancer le serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé :  http://localhost:${port}`);
})