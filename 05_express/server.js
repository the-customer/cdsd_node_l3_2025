import express from 'express';

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Link :  http://localhost:${PORT}/`);
});

// Methodes HTTP :
// - GET : récupérer des données
// - POST : envoyer des données
// - PUT / PATCH : modifier des données 
// - DELETE : supprimer des données
