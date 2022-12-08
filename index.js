// Dependencies
const express = require('express');
const cors = require('cors');

// Instantiate Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

// Redirect


// Controllers
const topics = require('./controllers/topics');
app.use('/topics',topics );

app.listen(app.get('port'), () => {
	console.log(
		'Hello world! ⭐️ Express GAphy API listening on port ' + app.get('port')
	);
});

module.exports =app