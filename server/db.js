const express = require('express')
const mysql = require("mysql");
const cors = require('cors');
const app = express()
const port = 8888

app.use(cors());
// app.use(express.json);

const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   


const db = mysql.createConnection({
    user: 'res_api',
    host: "192.168.20.128",
    password: "@#Kptv8@#123",
    database: "res_mgr"
})


app.post('/newRes', (req, res)=>{
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

    console.log(req.body);

    let file_uploaded = false;

    if (req.files !== null) {
        uplFile = req.files.file;
        
        fName = uplFile.name.replace(/\s/g, '_');

        uploadPath = __dirname + '/uploads/cv_data/' + uplFile.name;
        uplFile.mv(uploadPath, function (err) {
            if (err) {
                // return res.status(500).send(err);
                console.log("Error moving newRes file");
            } else {
                file_uploaded = true;
            }
            // res.send('File uploaded to ' + uploadPath);
        });
    }

    // res.send("Response:" + req.body);
    db.query('insert into res (name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type) values (?,?,?,?,?,?,?,?,?,?,?)',
     [name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type], 
    
    (err, result) => {
        if(err){
            res.send(err);
        } else {
            console.log("Form processed successfully");
            res.send("New record added to DB, CV upload status: " + file_uploaded);
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

// app.post('/upload', function (req, res) {
//     let uplFile;
//     let uploadPath;

//     console.log(req.files.file);
// });


  
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })
  