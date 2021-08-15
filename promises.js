


const posts = [
    {title: "La cellule 10", body: "Ahmed Marzouki"},
    {title: "Le batard d'istanbul", body: "Elif shafak"}
];




function getposts() {
    setTimeout(() =>{
        let outputs = '';
        posts.forEach((post, index) =>{
            outputs += `<li>${post.title} ${post.body}</li>`;
             
        });
        document.body.innerHTML = outputs;
        

    },2000)
}
getposts();

//i will create a new post using promise method
function createPost(post) {
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
        posts.push(post);

        const error = false;
        if(!error){
            resolve();
        } else {
            reject('Error: something went wrong check again');
        }
    }, 2000);
    

    });
    
}

createPost({title: "Soufi Mon Amour", body:"Elif shafak"})
.then(getposts)
.catch(err => console.log(err));


const promise1 = Promise.resolve('Hello mimy');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'I love you mimy goodbye')
});

Promise.all([promise1, promise2,promise3]).then(values => console.log(values));


//let's look async-wait method
async function init() {
     await createPost({title: "Elven minutes", body:"Paolo coelho"});

     getposts();
}

init();

//Async wait with fetch
async function fetchData() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
    
}

fetchData();
