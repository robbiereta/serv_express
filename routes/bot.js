var express = require("express");
var botRouter  = express.Router();
require('dotenv').config()

const token = process.env.WHATSAPP_TOKEN;
/* GET home page. */
botRouter.get("/", function(req, res, next) {
 /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
   const verify_token = process.env.VERIFY_TOKEN;

   // Parse params from the webhook verification request
   let mode = req.query["hub.mode"];
   let token = req.query["hub.verify_token"];
   let challenge = req.query["hub.challenge"];
 
   // Check if a token and mode were sent
   if (mode && token) {
     // Check the mode and token sent are correct
     if (mode === "subscribe" && token === verify_token) {
       // Respond with 200 OK and challenge token from the request
       console.log("WEBHOOK_VERIFIED");
       res.status(200).send(challenge);
     } else {
       // Responds with '403 Forbidden' if verify tokens do not match
       res.sendStatus(403);
     }
   }
});

botRouter.post("/", function(req, res, next) {

 // Parse the request body from the POST
 let body = req.body;
 let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; 
  // Check the Incoming webhook message
  console.log(msg_body);
   if(msg_body==null){
  one()
  
  }

  function one() {
    let data = JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "528341482736",
      "type": "text",
      "text": {
        "preview_url": false,
        "body": "hola "
      }
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://graph.facebook.com/v17.0/107769782374772/messages',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer EAAS9PVpm9wEBAEzaYDjZBQ94HjxyYBdOyz8HUt3UjGJmPHZB4bh1ZCupTcjwslL6QPpilwMnFNa8Q6nntDK2nC8mVGLWCOSU0VQylOXZAX11hnf7XfwJmMAaV1Am2PDKqfn5YwCxV8hl4vnxa7QRqta3hip46QQVIfe3IgY6WJa7fENRxVZBTZAZArZCGoB1AeUXmNSh3vFPBmeu3mf3oy2519cO7yZCYNSUZD'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
});

module.exports = botRouter ;
