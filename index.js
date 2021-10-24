const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello from second node server. Wow!  I am learning Node. Khela hobe');
})

const users = [
    {id:0, name:"golam", email:"gr@gmail.com"}, 
    {id:1, name:"jhanker", email:"gr@gmail.com"}, 
    {id:2, name:"robiul", email:"gr@gmail.com"},
    {id:3, name:"kauser", email:"gr@gmail.com"},
    {id:4, name:"tanha", email:"gr@gmail.com"},

]

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

//app.method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
});

app.listen(port, ()=>{
    console.log('listening to port ', port); 
});