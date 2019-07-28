const express = require("express");
const app = express();
const PORT = 5000;
const mongo = require("mongoose")




app.use(express.json());

mongo.connect("mongodb+srv://mekarosi:caroline2411%@cluster0-jiqvx.mongodb.net/test?retryWrites=true&w=majority", err => {
if (err){
    console.log("BROKEN")
}else{
   console.log("CONNECTED")
}
});





const user = require('./models/users')

app.post('/login', (req, res) =>{
    if (err) console.log(err)
    if(doc) return res.json({
        userDetails:doc,
        status:true
      })
})

app.post('/signup', (req, res) => {
    if(err) console.log(err)
    if(doc) return res.json({
        userDetails:doc,
        status:true  
    })
})



app.listen(PORT, err => {
    if (err) {
     console.log(err);
    } else {
     console.log("And We are live!!!!!!");
    }
    });