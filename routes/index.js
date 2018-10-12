var express = require('express');
var router = express.Router();
// var cData = require('https://titan.indwes.edu/api/programs/?language=en')

// var Request = require("request");

// Request.get("https://titan.indwes.edu/api/programs/?language=en", (error, response, body) => {
//     if(error) {
//         return console.log(error);
//     }
//     console.log("console log => " + error, response, bpdy)
//     response.render('/', {
//       body,
//     })
//     console.log(JSON.parse(body));
// });

// var requestJson = require("request-json");
// var jsonSchema = require("json-schema");

// var client = requestJson.createClient('https://titan.indwes.edu/api');

// client.get('/programs/?language=en', function(err, res, body) {
//   if (!err && response.statusCode == 200) {
//           var locals = JSON.parse(body);
//           res.render('<YOUR TEMPLATE>', locals);
//           console.log(locals);
//       }
//   // return console.log(body.rows[0].title);
// });

// const axios = require('axios');

// axios.get('https://titan.indwes.edu/api/programs/?language=en')
//     .then(response => {
//         console.log(response.data.status);
//         // console.log(response.data);
//         res.send(response.data.status);
//     })
//     .catch(error => {
//         console.log(error);
//     });



// var request = require('request');

// request.get('https://titan.indwes.edu/api/programs/?language=en', function(err, res, body) {
//   if (!err && response.statusCode == 200) {
//       var locals = JSON.parse(body);
//       res.render('<YOUR TEMPLATE>', locals);
//       console.log(locals);
//   }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'IWU Adult Enrollment Courses',
    // courses: cData,
  
  })
});

module.exports = router;
