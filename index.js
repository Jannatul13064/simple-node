const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wow,node Second Server');
});
const users = [
    { id: 0, name: 'Shabana', age: 30, salary: 30000, email: 'shabana@gmail.com', phone: '0198888888' },
    { id: 1, name: 'Boishakhi', age: 20, salary: 25000, email: 'boishakhi@gmail.com', phone: '0168888888' },
    { id: 2, name: 'Sokina', age: 22, salary: 35000, email: 'sokina@gmail.com', phone: '0158888888' },
    { id: 3, name: 'Morjina', age: 27, salary: 30000, email: 'morjina@gmail.com', phone: '0138888888' },
    { id: 4, name: 'Subah', age: 25, salary: 33000, email: 'subah@gmail.com', phone: '0177888888' },
    { id: 5, name: 'Ketty perry', age: 35, salary: 23000, email: 'kettyperry@gmail.com', phone: '0178888888' }
]
app.get('/users', (req, res) => {
    // const search = (req.query.search);
    // if (search) {
    //     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    //     res.send(searchResult);

    // }
    // else {
    //     res.send(users);
    // }
    const search = (req.query.search); ///use query params
    if (search) {
        const searchResult = users.filter(user => user.email.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

///Add post method to sending data
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple', 'jackfruits'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy Fazli Mango.')
})

app.listen(port, () => {
    console.log('App is Listening to you', port);
})
