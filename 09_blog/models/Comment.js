const comments = [
    {
        id: 1,
        postId: 1,
        author: 'John Doe',
        content: 'This is a great course. I ❤️ EXPRESS',
        createdAt: new Date()
    },
    {
        id: 2,
        postId: 1,
        author: 'theCustomer',
        content: 'So many features to learn',
        createdAt: new Date()
    },
    {
        id: 3,
        postId: 2,
        author: 'Breukh',
        content: 'Node js est vraiment trop cooooool!',
        createdAt: new Date()
    },
];

const getCommentsByPostId = (postId) => comments.filter(comment => comment.postId === postId);

module.exports = {
    getCommentsByPostId
};