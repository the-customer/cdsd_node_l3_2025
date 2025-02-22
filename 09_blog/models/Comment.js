let comments = [
    {
        id: 1,
        postId: 1,
        author: 'John Doe',
        content: 'This is a great course. I ❤️ EXPRESS',
        createdAt: new Date(),
        responses:[]
    },
    {
        id: 2,
        postId: 1,
        author: 'theCustomer',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        responses:[]
    },
    {
        id: 3,
        postId: 1,
        author: 'theCustomer',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        responses:[
            {
                id:1,
                author: 'Anonymous',
                content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
                createdAt: "22-12-2025 à 10:11",
            },
            {
                id:2,
                author: 'Toto',
                content: "So cool...",
                createdAt: "22-12-2025 à 10:11",
            }
        ]
    },
    {
        id: 4,
        postId: 2,
        author: 'Breukh',
        content: 'Node js est vraiment trop cooooool!',
        createdAt: new Date(),
        responses:[]
    },
];

export const getCommentsByPostId = (postId) => comments.filter(comment => comment.postId === postId);

export const getAllComments = () => comments;

export const addComment = (postId,author,content) => {
    const date = new Date();
    const newComment = {
        id: comments.length + 1,
        postId,
        author,
        content,
        createdAt: `${date.toLocaleDateString()} à ${date.toLocaleTimeString()}`,
        responses: []
    }
    comments.push(newComment);
    console.log(comments);
    return newComment;
}

export const addReponse = (commentId,author,content) => {
    const date = new Date();
    //Recuperer le comment:
    comments.forEach(comment=>{
        if(comment.id === commentId){
            const newReponse = {
                id: comment.responses.length + 1,
                author,
                content,
                createdAt: `${date.toLocaleDateString()} à ${date.toLocaleTimeString()}`,
            }
            comment.responses.push(newReponse);
        }
    })
}

export const deleteCommentByIdPost = (postId)=>{
    console.log(postId)
    comments = comments.filter(comment => comment.postId !== parseInt(postId))
}
export const deleteCommentById = (idComment) => {
    comments = comments.filter(comment => comment.id !== parseInt(idComment))
}
