let posts = [
    {
        id: 1,
        title: "Introduction to Node.js",
        content: "This is the content of post 1 : INtroduction to Node.js",
        author: "theCustomer",
        date: "2021-01-01",
        slug: "introduction-to-nodejs"
    },
    {
        id: 2,
        title: "Express for Beginners",
        content: "This is the content of post 2 : Express for Beginners",
        author: "Bob",
        date: "2021-10-01",
        slug: "express-for-beginners"
    }
];

export const getAllPosts = () => posts;
export const getPostById = (id) => posts.find(post => post.id === id);
export const getPostBySlug = (slug) => posts.find(post => post.slug === slug);
export const deletePostById = (id) => {

    posts = posts.filter(post => post.id != id)
}

export const updatePostById = (id,title, content) => {
    const post = getPostById(id);
    if(post){
        post.title = title;
        post.content = content;
    }
}
