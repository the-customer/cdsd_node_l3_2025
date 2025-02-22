import { addComment, addReponse,deleteCommentById } from "../models/Comment.js";
import { getPostById, getPostBySlug } from "../models/Post.js";



export const addCommentAction = (req, res) => {
    const postSlug = req.params.slug;
    if(!postSlug){
        res.status(400).json({ message: "Please provide post slug" });
        return;
    }
    const {author,content} = req.body;
    if (!author.trim() || !content.trim()) {
        res.status(400).json({ message: "Please provide author and content" });
        return;
    };
    const currentPost = getPostBySlug(postSlug);
    addComment(currentPost.id,author,content);
    res.redirect(`/posts/${postSlug}`);
}

export const addResponseAction = (req, res) => {
    const postId = +req.params.id;
    if(!postId){
        res.status(400).json({ message: "Please provide post id" });
        return;
    }
    const {author,content} = req.body;
    if (!author.trim() || !content.trim()) {
        res.status(400).json({ message: "Please provide author and content" });
        return;
    };
    const currentPost = getPostById(postId)
    addReponse(postId,author,content);
    res.redirect(`/posts/${currentPost.slug}`);
}

export const deleteComment = (req, res)=>{
    const {id} = req.params;
    deleteCommentById(id);
    res.redirect("/admin")
}