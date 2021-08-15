const coachs = [
    {name: "Jose Mourinho", team: "AS ROMA"},
     {name: "Pep guardiola", team: "Manchester City"}
];

const posts = [
    {title: "La cellule 10", body: "Ahmed Marzouki"},
    {title: "Le batard d'istanbul", body: "Elif shafak"}
];


function getCoach() {
    setTimeout(() =>{
        let output = '';
        coachs.forEach((coach, index) =>{
            output += `<li>${coach.name} ${coach.team}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
    
}

getCoach();


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


function createPost(post, callback) {
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 2000)
    
}

createPost({title: "Soufi Mon Amour", body:"Elif shafak"}, getposts);