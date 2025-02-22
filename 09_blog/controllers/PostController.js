
import {getPostBySlug,getAllPosts,deletePostById, getPostById,updatePostById} from '../models/Post.js';
import {getAllComments, getCommentsByPostId,deleteCommentByIdPost} from '../models/Comment.js';
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


export const adminDashbord = (req, res)=>{
    const posts = getAllPosts();
    const comments = getAllComments();
    res.render("admin/dashboard",{
        title: "Admin - Tableau de bord",
        posts,
        comments
    })
}
export const deletePost = (req, res)=>{
    // const id = req.params.id;
    const {id} = req.params;
    deletePostById(+id);
    deleteCommentByIdPost(id);
    res.redirect("/admin")
}

//

export const editPostForm = (req,res)=>{
    const post = getPostById(+req.params.id);
    if(!post){
        return res.status(404).send("Article non trouvé!");
    }
    res.render("admin/editPost",{
        title: "Edit Article",
        post
    })
}
export const updatePost = (req,res)=>{
    const id = +req.params.id;
    const {title,content} = req.body;
    if(!title.trim() || !content.trim()){
        return res.status(404),send("Tous les champs sont requis!");
    }
    updatePostById(id,title,content);
    res.redirect("/admin")
}

