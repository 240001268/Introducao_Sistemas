// Cenário: Dassboard c/ dados de utilizadroes e dos posts

const userRequest = fetch('https://jsonplaceholder.typicode.com/user')
    .then(result => result.json());

const postsRequest = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json());

Promise.all([userRequest, postsRequest])
.then(([users, posts]) => {
    console.log("Users:", users);
    console.log("Posts:", posts);
})
