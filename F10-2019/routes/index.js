var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Motive' });
});

router.get('/theme/:theme', function(req, res, next) {


  let text = "(Reuters) - Apple Inc (AAPL.O) said on Friday that Walt Disney Co (DIS.N) Chief Executive Officer Bob Iger had resigned from the company’s board of directors on Sept. 10 as the two companies prepare to compete head-to-head in the streaming television business.\n" +
      "\n" +
      "Iger departed Apple’s board the same day the company revealed new details about Apple TV+, a $4.99-per-month service that will launch on Nov. 1. Apple is spending billions in Hollywood to secure original programming for the service.\n" +
      "\n" +
      "The monthly subscription price for Apple TV+ undercuts Disney, which earlier this year announced its own streaming service that will feature its iconic children’s content and cost $6.99 per month. The Disney+ service will debut on Nov. 12.\n" +
      "\n" +
      "Apple and Disney have long had a unique relationship among major American companies, dating back to when Apple co-founder Steve Jobs became a Disney director and major shareholder when the entertainment giant bought Pixar, the digital animation studio majority owned by Jobs. Iger became an Apple director shortly after Jobs’ death in 2011.\n" +
      "\n" +
      "“While we will greatly miss his contributions as a board member, we respect his decision and we have every expectation that our relationship with both Bob and Disney will continue far into the future,” Apple said in a statement.\n" +
      "\n" +
      "Iger said it was “an extraordinary privilege” to have served on Apple’s board for eight years.\n" +
      "\n" +
      "“I have the utmost respect for Tim Cook, his team at Apple, and for my fellow board members,” Iger said in a statement. “Apple is one of the world’s most admired companies, known for the quality and integrity of its products and its people.”"


  let regex = /[A-Z]{3,4}\.[A-Z]/g;
  let companies = text.match(regex);
  res.send("hello "+req.params.theme + " \n Companies: "+companies);


});

module.exports = router;
