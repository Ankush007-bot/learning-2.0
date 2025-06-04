const express = require('express');
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const dotenv = require('dotenv'); 
var crypto = require("crypto");
dotenv.config();// by using this we can access values of constants in .env files
//import { v4 as uuidv4 } from "uuid";
const { v4 : uuidv4 } =  require("uuid")
//npm i express mongoose razorpay dotenv

const request = require('request-promise');
const { link } = require('fs');

var { validatePaymentVerification, validateWebhookSignature } = require('razorpay');


const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('mongodb connected');
  });
  

  app.use(express.json({extended:false}))  // using this middleware our application is gonna read the content of request body in the api's

  const OrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },
  });

  const Order = mongoose.model('Order', OrderSchema);

  // first api for geting razor-pay key from backend
// make an account on Razor-pay website and get Razor-pay key and Secret-Key

  app.get('/get-razorpay-key',(req,res)=>{
    res.send({key:process.env.RAZORPAY_KEY_ID});
  })


  // CREATING an order on Razor-Pay

  app.post('/create-order', async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      // connects Razor-Pay and create order
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

  //Api to check status of 
app.get('/fetchPayment',async (req,res)=>{
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

                                               //payment id
   const status= await instance.payments.fetch('pay_K2qVJntIxVmK61').then((response)=>{ 
    console.log(response.status)
    var status = response.status
    return status
  }).catch(
    (error)=>{console.log(error)
    })
  //console.log(payment)
  console.log(status,"status") //captured for successfull payment

  res.send(status)

})

  //pay_order api 


  app.post('/pay-order', async (req, res) => {
    try {
      const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
        req.body;
      const newOrder = Order({
        isPaid: true,
        amount: amount,
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });
      await newOrder.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });



  app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.razorpayOrderId + "|" + req.body.razorpayPaymentId;
   
    
     var expectedSignature = crypto.createHmac('sha256', '7muJXJLwZV9BgduhSOaDC4Th').update(body.toString()).digest('hex');
                                
     if(expectedSignature === req.body.razorpaySignature){
       
        res.send({msg:"payment signature verified"});
     }else{
       
        res.send({msg:"payment signature not verified"});
     }
     
         
     });





     app.post("/createPaymentLink",(req,res)=>{


      const createPaymentLinkRP= async (req)=>{
        const instance = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_SECRET,
        });
        let pkt = {
          amount: 100000,
          currency: "INR",
          accept_partial: false,
        
          reference_id: uuidv4(),
        
          customer: {
            name: req.body.proposerName,
            contact: null,
            email: null,
          },
          notify: {
            sms: false,
            email: false
          },
          reminder_enable: true,
          callback_url: 'http://localhost:5000/paymentlinkCallback',
          callback_method: "get"
          // callback_url: `${config.constants.appUrl}/gates/1.0/sways/pg/rp/receiveBrwrCallbackRazorPay`,
          // callback_method: "get"
        };
        const btoa = (str) => {
          return Buffer.from(str).toString('base64');
        };

        const options = {
          url: 'https://api.razorpay.com/v1/payment_links',
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Authorization': "Basic " + btoa(process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_SECRET),
            'Content-Type': 'application/json'
          },
          body: pkt,
          json: true
        }
       const Link =  await request(options) 
        .then(function(body) {
          
   // console.log(body,"link body")
          let link = body.short_url;
          //console.log(link,"link body")
         
          
          
          return  link
          res.cb(link)
        })
        .catch(function(error) {
        // console.log(error.error,"msg")
        });
       console.log(Link,"link")
        
  res.send({"paymentlink":Link}) 
        
      }


createPaymentLinkRP(req);
//res.send("createpayment link")      
      

     })

    

//API to verify the payement done by payment-link
     app.get('/paymentlinkCallback', async (req, res) => {
    //console.log(req.query,'paymentlink req')
    var body = req.query.razorpay_payment_link_id + '|' + req.query.razorpay_payment_link_reference_id + '|' + req.query.razorpay_payment_link_status + '|' + req.query.razorpay_payment_id;
 
    var expectedSignature = crypto.createHmac('sha256', '7muJXJLwZV9BgduhSOaDC4Th')
                                     .update(body.toString())
                                     .digest('hex');
 
    
      
    console.log(expectedSignature,"expectd")

    console.log(expectedSignature,"req.query.razorpay_signature")

    if(expectedSignature===req.query.razorpay_signature){
      res.send("your payment is verified and successfull")
    }else{
      res.send("error in verifying your payment")
    }
    




    });



  app.get('/list-orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  });

  const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);



//npx create-react-app frontend