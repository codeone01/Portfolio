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
require('dotenv').config();

console.log('MAIL_USER:', process.env.MAIL_USER);
console.log('MAIL_PASS existe?', !!process.env.MAIL_PASS);

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


// Rotas de Demos
const demos = require('./routes/demos')
app.use('/demo', demos)

//contact email
/* nome, email, celular, assunto, mensagem */


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: Number(process.env.MAIL_PORT) === 465, // true p/ 465, false p/ 587
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// ROTA DE CONTATO
// nome, email, celular, assunto, mensagem, desafio
app.post('/send_email', async (req, res) => {
    const { nome, email, celular, assunto, mensagem, desafio } = req.body;

    console.log('data: ', req.body);

    try {
        await transporter.sendMail({
            from: `"Site Portfólio" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `Novo contato: ${assunto || 'Sem assunto'}`,
            html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular || 'não informado'}</p>
        <p><strong>Desafio:</strong> ${desafio || 'não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${(mensagem || '').replace(/\n/g, '<br>')}</p>
      `,
        });

        // Sucesso → volta pra home com flag sent=1
        return res.redirect('/?sent=1');
    } catch (err) {
        console.error('Erro ao enviar email:', err);

        // Erro → volta pra home com flag error=1
        return res.redirect('/?error=1');
    }
});


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