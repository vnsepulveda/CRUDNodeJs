const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicializar express

const app = express();


//configuracion 

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars')
}))

app.set('view engine', '.hbs');

//middlewares cada vez que el cliente envia petición al servidor

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// variables globales;

app.use((req, res, next) => {
    next();
})

//rutas

app.use(require('./routes'))
app.use(require('./routes/autenticacion.js'))
app.use('/links', require('./routes/links.js'));
//archivos publicos

app.use(express.static(path.join(__dirname, 'public')));

//comenzar el server

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en', app.get('port'));
})