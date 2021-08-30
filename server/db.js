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
    const skills = req.body.checkedData;

    let PROCESS_STATUS = {
        id: '',
        create: false,
        upload: false,
        skills_add: 0
    };

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
                    PROCESS_STATUS.id =  result.insertId;
                    PROCESS_STATUS.create = true;
                    PROCESS_STATUS.upload = file_uploaded;
                    console.log("New resource processed successfully");
                    skillsAdd(PROCESS_STATUS);
                }
            }
        )
    }).catch(e => console.log(e));

    function skillsAdd(PROCESS_STATUS) {
        let id = PROCESS_STATUS.id;
        if (skills.length > 0) {
            let skillsArr = skills.split(",");
            console.log(skillsArr);

            let sql = 'INSERT INTO `res_mgr`.`comp_tag_data` (`res_id`, `comp_tag_id`) VALUES ';

            skillsArr.map(
                i => sql += "('" + id + "', '" + (i-3000) + "'),"
            )
            sql = sql.replace(/,\s*$/, "");

            db.query(sql,
                (err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        PROCESS_STATUS.skills_add = result.affectedRows;
                        console.log(PROCESS_STATUS.skills_add + "New skills added");
                    }
                }
            )


            console.log(sql);
        }
        res.send(PROCESS_STATUS);
        console.log(PROCESS_STATUS);
    }
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
app.post('/getSkills', (req, res)=>{

    let sql = `SELECT "root" AS label, 1 AS value, NULL AS parent UNION
    SELECT cd.domain AS item, cd.id + 1000 AS id, 1 AS parent
    FROM comp_domain cd
    JOIN comp_subdomain sd ON cd.id = sd.parent_domain UNION
    SELECT sd.sub_domain AS item, sd.id + 2000 AS id, parent_domain + 1000 AS parent
    FROM comp_subdomain sd
    JOIN comp_tags ct1 ON sd.id = ct1.parent_subdomain UNION
    SELECT tag AS item, id + 3000 AS id, parent_subdomain + 2000 AS parent
    FROM comp_tags
     `;

    function tree(data) {
        const idMapping = data.reduce((acc, el, i) => {
            acc[el.value] = i;
            return acc;
        }, {});

        let root;
        data.forEach(el => {
            if (el.parent === null) {
                root = el;
                return;
            }
            const parentEl = data[idMapping[el.parent]]; console.log(parentEl);
            parentEl.children = [...(parentEl.children || []), el];
        });
        return root;
    }

    db.query(sql, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(tree(result));
        }
    })

})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })
  