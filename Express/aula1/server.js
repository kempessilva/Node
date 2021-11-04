require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.emit('Pronto');
    }).catch(e=>console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Usar somente com HTTPS
// app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'kempes',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname,'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Usar nossos próprios middlewares
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.post('/', (req, res) =>{
    console.log(req.body);
    res.send('Recebi');
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
});

app.on('Pronto', () =>{
    app.listen(3000, () =>{
        console.log('Servidor executando em http://localhost:3000');
    });
});
