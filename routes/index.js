var express = require('express');
var router = express.Router();
require('dotenv').config();
var request = require('request');
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render ('index.hbs');
});

// router.get ('/', function (req, res, next) {
// 	res.render ('testNot.hbs');
// });

router.get('/sendMessage', (req, res) => {
	// request(`http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=918141491833,918800467915&authkey=${process.env.SMS_API}&message=Hey BHAI sdmaslkmassCHALJAA Yo Dude!`, function (error, response, body) {
		
	// 	if (error) {
	// 		res.status(404).send(error);
	// 	}
	// 	console.log('body:', body); // Print the HTML for the Google homepage.
	// 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	// 	res.render('dashboard.hbs');
	// });

	unirest.post(`http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=918800467915&authkey=${process.env.SMS_API}&message=BHAI sdmaslkmassCHALJAA Yo Dude!`)
		.headers({'Accept': 'application/json'})
		.end(function (response) {
			res.render('dashboard.hbs');
		});
});

module.exports = router;
