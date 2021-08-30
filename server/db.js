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





createUser = (body) =>{
    const {
        name,
        email,
        title,
        pri_contact_no,
        sec_contact_no,
        contract_type,
        country,
        region,
        comments,
        management_co,
        co_type
    } = body;

    return new Promise((resolve, reject)=>{
        db.query('insert into res (name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type) values (?,?,?,?,?,?,?,?,?,?,?)',
            [name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type],  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results.insertId);
        });
    });
};


createSkills = (id,skillData) =>{

    if (skillData.length > 0) {
        let skillsArr = skillData.split(",");
        let sql = 'INSERT INTO `res_mgr`.`comp_tag_data` (`res_id`, `comp_tag_id`) VALUES ';
        skillsArr.map(
            i => sql += "('" + id + "', '" + (i-3000) + "'),"
        )
        sql = sql.replace(/,\s*$/, "");

        return new Promise((resolve, reject)=>{
            db.query(sql,  (error, results)=>{
                if(error){
                    return reject(error);
                }
                return resolve(results.affectedRows);
            });
        });
    }

}

processFiles = (id, files) =>{
    
    return new Promise((resolve, reject) => {

        if (files === null) {
            return resolve("No Files to upload");
        }

        let status = { uploaded: false, db_updated: false };

        let cv_path = '';
        let fName = false;

        let uplFile = files.file;
        fName = uplFile.name.replace(/\s/g, '_');
        let uploadPath = __dirname + '/uploads/cv_data/' + fName;
        cv_path = fName;
        let sql = `update res set cv_path = '${cv_path}' where id = ${id}`;
        
        if (uplFile.mv(uploadPath)) {
            status.uploaded = true;
            db.query(sql,  (error, res)=>{
                if(error){
                    return reject(error);
                }
                status.db_updated = res.affectedRows;
                return resolve(status);
            });
        } else { 
            status.response = "Unable to upload file";
            return reject(status); 
        }


    });
};

app.post('/newRes', async (req, res, next)=>{
    
    try {
        const id = await createUser(req.body);
        const skills = await createSkills(id, req.body.checkedData);
        const uploaded = await processFiles(id, req.files);
        res.status(200).json({ id: id, upload: uploaded, skills_add: skills }); // send a json response
    } catch(e) {
        console.log(e); // console log the error so we can see it in the console
        res.sendStatus(500);
    }
});

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
  