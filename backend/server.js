const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const db = require('./connection');

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const sql = `SELECT count(*) AS 'Total' FROM hperson`;

  db.query(sql, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
      // return res.send(data);
  })
})

app.get('/user', (req, res) => {
  const sql = `select * from hpersonal;`;

  db.query(sql, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
      // return res.send(data);
  })
})

app.get('/pharma', (req, res) => {
  const sql = `
  SELECT hperson.patlast,
  hperson.patfirst,
  hperson.patmiddle,
  CONCAT(hward.wardname,'-',hroom.rmname,'-',hbed.bdname) AS Ward,
hrxo.docointkey,
  hrxo.enccode,
  hrxo.hpercode,
  hrxo.upicode,
  hrxo.rxooccid,
  hrxo.rxoref,
  hrxo.dmdcomb,
  hrxo.rxoreas,
  hrxo.rgamin,   
  hrxo.rgunits,   
  hrxo.plicno,
  hrxo.reppatrn1,   
  hrxo.reppatru1,   
  hrxo.repdayno1,   
  hrxo.reppatrn2,
  hrxo.reppatru2,   
  hrxo.repdayno2,   
  hrxo.rxoindic,
  hrxo.dmdprice,   
  hrxo.unitcode,
  hrxo.resstat,
  hrxo.rxostatus,
  hrxo.rxolock,   
  hrxo.rxodtmd,   
  hrxo.rxoupsw,   
  hrxo.rxoconfd,
  hrxo.rxoid,   
  hrxo.rxorefno,
  hrxo.rxooid2,   
  hrxo.rxooc2,
  hrxo.dmdctr,   
  hrxo.pcchrgcod,   
  hrxo.uomcode,   
  hrxo.pchrgqty,
  hrxo.pchrgup,
  hrxo.pcchrgamt,   
  hrxo.pcdisch,
  hrxo.acctno,   
  hrxo.estatus,   
  hrxo.entryby,
  hrxo.dodate,   
  hrxo.dotime,   
  hrxo.licno,
  hrxo.ordcon,   
  hrxo.orcode,
  hrxo.orstat,
  hrxo.orderupd,   
  hrxo.dodtepost,   
  hrxo.dotmepost,   
  hrxo.verby,   
  hrxo.doctype,   
  hrxo.intkeyref,   
  hrxo.reason,   
  hrxo.remarks,   
  hrxo.dopriority,   
  hrxo.qtyissued,
  hrxo.qtybal,   
  hrxo.altdrug,   
  hrxo.dmdprdte,  
  hrxo.orderfrom,
  hrxo.purchased,
  (SELECT concat(ifnull(rtrim(hgen.gendesc), '' ),', ',
       ifnull(rtrim(hdmhdr.brandname), '' ) +
       ifnull(CONVERT(hdmhdr.dmdnost,CHAR(8)), '' ) +
      CASE rtrim(hdmhdr.dmdnnostp)
                 WHEN NULL THEN ' '
                 WHEN 'Y' THEN '% '
                 ELSE ''
                 END +
      ifnull(rtrim(hstre.stredesc), '' ),', ',
      ifnull(rtrim(hform.formdesc), '' ),', ',
      ifnull(rtrim(hroute.rtedesc), '' ))
    FROM hdmhdr right outer join hroute on hroute.rtecode = hdmhdr.rtecode
                right outer join hstre on hstre.strecode = hdmhdr.strecode,
       hdruggrp,   
       hform,   
       hgen
   WHERE
       ( hdruggrp.grpcode = hdmhdr.grpcode ) and
       ( hform.formcode = hdmhdr.formcode ) and  
       ( hgen.gencode = hdruggrp.gencode ) and
       ( hdmhdr.grpcode = hdruggrp.grpcode ) and 
       ( hdmhdr.dmdcomb = hrxo.dmdcomb ) and
       ( hdmhdr.dmdctr = hrxo.dmdctr ) ) as item_description
FROM hrxo,
  hperson,
  hbed,
  hpatroom,
  hward,
  hroom
WHERE
  hbed.bdintkey = hpatroom.bdintkey AND
  hbed.wardcode = hward.wardcode AND
  hbed.rmintkey = hroom.rmintkey AND
  hpatroom.enccode = hrxo.enccode AND
  hpatroom.hprdate = (SELECT max(hprdate) FROM hpatroom WHERE enccode = hrxo.enccode) and
  hperson.hpercode = hrxo.hpercode and
  hrxo.estatus <> 'S' and
  hrxo.qtybal > 0;
  `;

  db.query(sql, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
      // return res.send(data);
  })
})


// Routers
// const userRouter = require("./routes/userRoutes");

//Routers
// const userRouter = require('./routes/userRoutes');
// app.get("/users", userRouter );


app.listen(8081, () => {
  console.log("listening on port 8081");
});