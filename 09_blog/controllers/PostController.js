const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.listPosts = (req, res) => {
    const posts = Post.getAllPosts();
    if(!posts){
        return res.status(404).send('Aucun article trouvé');
    }
    res.render('posts/index',{
        title: 'Liste des Articles',
        posts
    })
}

exports.showPost = (req, res) => {
    const idPost = +req.params.id; 
    const post = Post.getPostById(idPost);
    console.log(post);
    if(!post){
        return res.status(404).send('Aucun article trouvé');
    }

    const comments = Comment.getCommentsByPostId(idPost);
    res.render('posts/show',{
        title: post.title,
        post,
        comments
    })
}


