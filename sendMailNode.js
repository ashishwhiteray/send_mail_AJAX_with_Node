var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var cors = require ('cors');
var nodemailer = require('nodemailer');      //-----------------Included nodemailer to send mail--------------------

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

 //--------------------------Created POST API to send mail (START)------------------------------
 
app.post('/', async function(req,res){


    try {
  
 let name=req.body.name;
    let email=req.body.email;
    let message=req.body.message;
    let number=req.body.number;
    console.log("This is the data", req.body);
    
    //--------------------------Functioality to send mail START------------------------------
    
    var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: 'saxena.ashish1122@gmail.com',
    pass: 'computersaxena1@'
  }
});

var mailOptions = {
  from: 'saxena.ashish1122@gmail.com',
  to: 'info@xenings.com',
  subject: 'Client sent data from xenings.com',
  text: `Hello Xenings, 
  \nWe have got a client data as following.
  \n\nName of Clinet:--- `+name+
  `\n\nEmail of Clinet:--- `+email+
  `\n\nContact number of Clinet:--- `+number+
  `\n\nMessage from Client:--- "`+message+`"`
        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 //--------------------------Functioality to send mail END------------------------------
 

res.send("Mail has been sent successfully");           
}
catch (e) {
  res.send(e);
}
   
    
})

 //--------------------------Created POST API to send mail (END)------------------------------
 
app.listen('3000', function(){
    console.log("Server is running on port no. 3000");
});
