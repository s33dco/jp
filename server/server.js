const express   = require('express');
const hbs       = require('hbs');
const bodyParser= require('body-parser');
const morgan    = require('morgan');
const port      = process.env.PORT || 3000;

// set up app

let app = express();
app.locals.title = 'Fixes';
app.locals.email = 'hello@fixes.co.uk';
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/../views/partials');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// helpers
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});


// static pages
app.get('/',(req, res) => {
	res.status(304).send({
	name: 'here we are'
});
  // res.render('home.hbs', {
	// 	pageTitle       : `Home | ${app.locals.title}`,
  //   pageDescription : `Welcome to ${app.locals.title}`
	// });
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
		pageTitle       : `About | ${app.locals.title}`,
    pageDescription : "about"
	});
});

app.get('/carpentry',(req, res) => {
  res.render('about.hbs', {
		pageTitle       : `Carpentry | ${app.locals.title}`,
    pageDescription : "about"
	});
});

app.get('/gardening',(req, res) => {
  res.render('about.hbs', {
		pageTitle       : `Gardening | ${app.locals.title}`,
    pageDescription : "about"
	});
});

app.get('/contact',(req, res) => {
  res.render('contact.hbs', {
		pageTitle       : `Contact | ${app.locals.title}`,
    pageDescription : `Get in touch with ${app.locals.title}`
	});
});

app.get('/thanks',(req, res) => {
  res.render('thanks.hbs', {
		pageTitle       : `Thanks | ${app.locals.title}`,
    pageDescription : "thanks for your message"
	});
});

app.get('/invoices',(req, res) => {
  res.render('invoices.hbs', {
		pageTitle       : `Invoices | ${app.locals.title}`,
    pageDescription : "Invoices Home"
	});
});

app.post('/invoices',(req, res) => {
  res.render('new_invoice.hbs', {
		pageTitle       : `Create Invoice | ${app.locals.title}`,
    pageDescription : "Create Invoice"
	});
});

app.get('/invoices/:invoice_id',(req, res) => {
  res.render('view_invoice.hbs', {
		pageTitle       : `View Invoice | ${app.locals.title}`,
    pageDescription : "View Invoice"
	});
});






app.get('/clients',(req, res) => {
  res.render('clients.hbs', {
		pageTitle       : `Clients | ${app.locals.title}`,
    pageDescription : "Clients Homes"
	});
});



app.use((req, res, next) => {
    res.status(404).render('404.hbs', {title: "Sorry, page not found"});
});


app.listen(port, () => {
	console.log(`server running on ${port}`);
});

module.exports = {app};
