
import {getPostBySlug,getAllPosts} from '../models/Post.js';
import {getCommentsByPostId} from '../models/Comment.js';
import slug from 'slug';

export const listPosts = (req, res) => {
    const posts = getAllPosts();
    //Ajouter un slug a chaque post
    // const postsWithSlug = posts.map(post => {
    //     return {...post,slug: slug(post.title, {lower: true})}
    // });
    if(!posts){
        return res.status(404).send('Aucun article trouvé');
    }
    res.render('posts/index',{
        title: 'Liste des Articles',
        posts
    })
}

export const showPost = (req, res) => {
    const slugPost = req.params.slug; 
    const post = getPostBySlug(slugPost);
    if(!post){
        return res.status(404).send('Aucun article trouvé');
    }
    //slug
    // const slug = post.title.toLowerCase().split(' ').join('-'); 
    const comments = getCommentsByPostId(post.id);
    res.render('posts/show',{
        title: post.title,
        post,
        comments
    })
}


