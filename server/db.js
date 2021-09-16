/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
const express = require('express');
// const promise = require('await-callback')
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8888;

app.use(cors());
// app.use(express.json);

const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  user: 'res_api',
  host: 'localhost',
  password: '@#Kptv8@#123',
  database: 'res_mgr',
});

const createUser = (body) => {
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
    co_type,
  } = body;

  return new Promise((resolve, reject) => {
    const status = { action: 'Create Resource', process_status: 'info', resp_text: '' };

    db.query('insert into res (name, email, title, pri_contact_no, sec_contact_no, contract_type, country, region, comments, management_co, co_type) values (?,?,?,?,?,?,?,?,?,?,?)',
      [name,
        email,
        title,
        pri_contact_no,
        sec_contact_no,
        contract_type,
        country, region,
        comments, management_co,
        co_type],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        status.process_status = 'success';
        status.resp_text = 'Resource Created';
        status.id = results.insertId;
        return resolve(status);
      });
  });
};

const createSkills = (id, skillData) => new Promise((resolve, reject) => {
  const status = { action: 'Add Skills', process_status: 'info', resp_text: '' };
  if (skillData.length > 0) {
    const skillsArr = skillData.split(',');
    let sql = 'INSERT INTO `res_mgr`.`comp_tag_data` (`res_id`, `comp_tag_id`) VALUES ';
    skillsArr.map(
      (i) => sql += `('${id}', '${i - 3000}'),`,
    );
    sql = sql.replace(/,\s*$/, '');
    db.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      status.resp_text = `${results.affectedRows} skills added`;
      status.process_status = 'success';
      return resolve(status);
    });
  } else {
    status.resp_text = 'No skills added, you can add them later';
    return resolve(status);
  }
});

const processFiles = (id, files) => new Promise((resolve, reject) => {
  const status = { action: 'CV Upload', process_status: 'info', resp_text: 'No Files to upload' };

  if (files === null) {
    return resolve(status);
  }

  let cv_path = '';
  let fName = false;

  const uplFile = files.file;
  fName = uplFile.name.replace(/\s/g, '_');
  const uploadPath = `${__dirname}/uploads/cv_data/${fName}`;
  cv_path = fName;
  const sql = `update res set cv_path = '${cv_path}' where id = ${id}`;

  if (uplFile.mv(uploadPath)) {
    status.uploaded = true;
    db.query(sql, (error, res) => {
      if (error) {
        return reject(error);
      }
      status.resp_text = `File uploaded. ${(res)}`;
      status.process_status = 'success';
      return resolve(status);
    });
  } else {
    status.resp_text = 'Unable to upload file';
    return reject(status);
  }
});

app.post('/newRes', async (req, res) => {
  try {
    const user = await createUser(req.body);
    const skills = await createSkills(user.id, req.body.checkedData);
    const uploaded = await processFiles(user.id, req.files);
    res.status(200).json([user, skills, uploaded]);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.post('/getRes', (req, res) => {
  db.query('select * from res', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/deleteSkill', (req, res) => {
  const { id } = req.body;
  const sql = 'delete from comp_tag_data where id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      res.send({ status: false, text: 'Something went wrong... ' });
    } else {
      res.send({ status: true, text: `Skill Deleted! ${results.affectedRows}` });
    }
  });
});

app.post('/getSkills', (req, res) => {
  const sql = `SELECT "root" AS label, 1 AS value, NULL AS parent UNION
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
    data.forEach((el) => {
      if (el.parent === null) {
        root = el;
        return;
      }
      const parentEl = data[idMapping[el.parent]];
      parentEl.children = [...(parentEl.children || []), el];
    });
    return root;
  }

  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(tree(result));
    }
  });
});

// Profile data

const getProfile = (id) => new Promise((resolve, reject) => {
  db.query('select * from res where id=? limit 1',
    [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});

const getAssignments = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT CONCAT( left(MONTHNAME(ra.start),3) , " '",right(YEAR(ra.start), 2)) AS time, 
        ra.title, 
        ra.desc, 
        ra.end, 
        ra.id_res,
        r.avatar,
        r.name,
        r.role
        fROM res_assignments ra
        LEFT JOIN res r ON 
        r.id = ra.id_res
        WHERE 
        ra.id_proj IN (SELECT id_proj FROM res_assignments WHERE id_res = ?)  
        order by 1 desc`;

  db.query(sql,
    [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});

const getCompTagData = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT 
        ctd.id,
        ct.tag,
        sd.sub_domain,
        cd.domain
        FROM comp_tag_data ctd 
        LEFT JOIN comp_tags ct ON ctd.comp_tag_id = ct.id
        LEFT JOIN comp_subdomain sd ON  sd.id = ct.parent_subdomain
        LEFT JOIN comp_domain cd ON cd.id = sd.parent_domain
        WHERE res_id = ?`;

  db.query(sql,
    [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});

app.post('/userProfile', async (req, res) => {
  try {
    const profile = await getProfile(req.body.id);
    const assign = await getAssignments(req.body.id);
    const comp_tag_data = await getCompTagData(req.body.id);
    res.status(200).json({ profile: profile[0], assignments: assign, comp_tag_data });
  } catch (e) {
    res.sendStatus(500);
  }
});

// Dashboard data

const getActAssign = () => new Promise((resolve, reject) => {
  const sql = `SELECT COUNT(*) as res_count, 
        if(end IS NULL, true, false) AS 'active'
        FROM res_assignments
        GROUP BY END `;

  db.query(sql,
    (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});

const getActRes = () => new Promise((resolve, reject) => {
  const sql = 'SELECT active_status, COUNT(active_status) AS count FROM res GROUP BY 1';
  db.query(sql,
    (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});

app.post('/dashData', async (req, res) => {
  try {
    const actAssignments = await getActAssign();
    const actRes = await getActRes();
    res.status(200).json({ actAssignments, actRes });
  } catch (e) {
    res.sendStatus(500);
  }
});

//Auth user

const verifyUser = (email) => new Promise((resolve, reject) => {
  const sql = "select email, active from sys_users where email = ? limit 1";
  db.query(sql, [email],
    (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
});


app.post('/verify', async (req, res) => {
  const email  = req.body.email;
  console.log("called");
  try {
    const authStatus = await verifyUser(email);
    if(authStatus.length === 1){      
      res.status(200).json(Boolean(authStatus[0].active));
    } 
    else {
      res.status(200).json(false);
    }
    
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/', (req, res) => {
  res.send('Running');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Prod server listening at http://localhost:${port}`);
});
