const express = require('express')
// const promise = require('await-callback')
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
    let cv_path = '';
    let fName = false;


    async function processFiles() {
        if (req.files !== null) {
            let uplFile = req.files.file;
            fName = uplFile.name.replace(/\s/g, '_');
            let uploadPath = __dirname + '/uploads/cv_data/' + fName;
            cv_path = fName;
            await uplFile.mv(uploadPath);
        }
    }
    processFiles().then(() => {
        db.query('insert into res (name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type, cv_path) values (?,?,?,?,?,?,?,?,?,?,?,?)',
            [name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type, cv_path],

            (err, result) => {
                if (err) {
                    res.send(err);
                } else {

                    console.log("New resource processed successfully");
                    res.send("New record added to DB, CV upload status: " + file_uploaded);

                }
            }
        )
    }).catch(e => console.log(e));
    
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

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })
  