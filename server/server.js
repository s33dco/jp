const express   = require('express');
const hbs       = require('hbs');
const fs        = require('fs');
const port      = process.env.PORT || 3000;

// set up app

let app = express();
app.locals.title = 'Fixes';
app.locals.email = 'hello@fixes.co.uk';
hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');

// set up logger
app.use((req, res, next) => {
  let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}\nfrom ${req.ip} - ${req.headers['user-agent']}\n`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('unable to append to server log.')
		}
	});
	next();
});


// helpers
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});


// static pages
app.get('/',(req, res) => {
  res.render('home.hbs', {
		pageTitle       : `Home | ${app.locals.title}`,
    pageDescription : `Welcome to ${app.locals.title}`
	});
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

app.use((req, res) => {
  // res.sendStatus(404);
  res.render('404.hbs'), {
		pageTitle       : `404 | ${app.locals.title}`,
    pageDescription : "maybe try something else"
	};
});


app.listen(port, () => {
	console.log(`server running on ${port}`);
});

module.exports = {app};