import { addComment } from "../models/Comment.js";
import { getPostBySlug } from "../models/Post.js";



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