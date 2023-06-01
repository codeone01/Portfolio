// carregando módulos
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const db = require('./config/db')
const nodemailer = require('nodemailer')

// Configurações

// Sessão
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
// Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
})
// Middleware parse req JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')
// Mongoose
mongoose.Promise = global.promise;
mongoose.connect(db.mongoURI).then(() => {
    console.log('Conectado ao mongo!')
}).catch((err) => {
    console.log("houve um erro" + err)
})
// Public
app.use(express.static(path.join(__dirname, "public")))


app.get('/', (req, res) => {
    res.render('index', {
        style: 'style.css',
        script: 'script.js'
    })
})


//contact email

/* nome, email, celular, assunto, mensagem */
app.post('/send_email', function(req, res){
    console.log('data: ', req.body)
})

app.get('/404', (req, res) => {
    res.render('erros/404', {
        style: 'error.css'
    })
})

// Outros
const PORT = process.env.MONGO_URI || 8081
app.listen(PORT, () => {
    console.log('SERVIDOR rodando! http://localhost:8081/')
})