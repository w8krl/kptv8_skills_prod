const express = require('express')
const mysql = require("mysql");
const cors = require('cors');
const app = express()
const port = 8888

app.use(cors());
// app.use(express.json);

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = mysql.createConnection({
    user: 'res_api',
    host: "192.168.20.128",
    password: "@#Kptv8@#123",
    database: "res_mgr"
})


app.post('/create', (req, res)=>{
    // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx");
    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.title;
    const pri_contact_no = req.body.pri_contact_no;
    const sec_contact_no = req.body.sec_contact_no;
    const contract_type = req.body.contract_type;
    const country = req.body.country;
    const region = req.body.region;
    const comments = req.body.comments;
    const management_co = req.body.management_co;
    const co_type = req.body.co_type;

    // res.send("Response:" + req.body);
    db.query('insert into res (name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type) values (?,?,?,?,?,?,?,?,?,?,?)',
     [name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type], 
    
    (err, result) => {
        if(err){
            res.send(err);
        } else {
            console.log("Success");
            res.send("Values sent!" + req.body.email);
        }
    }
    )

})

app.post('/getRes', (req, res)=>{

    db.query('select * from res', (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    })

})

app.post('/test', (req,res)=>{ res.send("received")})


  
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })
  