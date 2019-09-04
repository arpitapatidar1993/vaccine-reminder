var express = require('express');
var body = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(body.json() );       // to support JSON-encoded bodies
app.use(body.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: "store"
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/api/SaveUser',function (req,res) {

  if(req.body.mode == "Save") {
    patient_name = req.body.petiant_name;
    age = req.body.age;
    fathers_name = req.body.fathers_name;
    mothers_name = req.body.mothers_name;
    date_of_birth = req.body.date_of_birth;
    date = req.body.date;
    contact_number = req.body.contact_number;
    vaccines_name = req.body.vaccines_name;

    console.log(patient_name);
    console.log(age);
    console.log(fathers_name);
    console.log(mothers_name);
    console.log(date_of_birth);
    console.log(date);
    console.log(contact_number);
    console.log(vaccines_name);

    con.connect(function (err) {
      var q = "insert into users_info ( petiant_name,age,fathers_name,mothers_name,date_of_birth,date,contact_number,veccine_name) values('" + patient_name + "', " + age + " ,'" + fathers_name + "','" + mothers_name + "','" + date_of_birth + "','" + date + "'," + contact_number + ",'" + vaccines_name + "')"
      con.query(q, function (error, data) {
        if (error) {
          res.send("error shows" + error);

        }
        else {
          res.send("store data" + data)
        }
      });

     // var r= "insert into vaccines_history (petiant_id,vaccine_name,date,petiant_name,vaccine_id) SELECT (ID,veccine_name,date,petiant_name,(select vaccine_id from vaccines_info where vaccines_name='"+vaccines_name+"')) FROM users_info where petiant_name='"+patient_name+"' and contact_number= '"+contact_number+"'";
      var r= "insert into vaccines_history (petiant_id,vaccine_name,date,petiant_name,vaccine_id) " +
        "SELECT ID,veccine_name,date,petiant_name,(select vaccine_id from vaccines_info where vaccines_name='"+vaccines_name+"') " +
        "FROM users_info where petiant_name='"+patient_name+"' and contact_number= '"+contact_number+"'";
      console.log(r);
      con.query(r, function (error,data) {
        if (error)
        {
          console.log(error);
        }
        else {
          console.log(data);
        }

      });

    })
  }
    })

app.get("/api/getVaccine", function (req,res) {
  console.log(" i am at get user serverjs");
 con.connect(function (err) {
   var q = "select vaccines_name from vaccines_info";
   con.query(q, function (err, data) {

     if(err)
     {
       res.send("error show---->" +err);
     }
     else {
       res.send(data);
     }
   })

 })
})

app.post("/api/getUser", function (req,res) {
  console.log(" i am at get user serverjs");
  petiant_name = req.body.petiant_name;
  contact_number = req.body.contact_number;
  console.log(petiant_name);
  console.log(contact_number);
  con.connect(function (err) {
    var q = "select * from users_info where petiant_name= '"+petiant_name+"'  and contact_number= '"+contact_number+"' ";
    con.query(q, function (err, data) {
      if(err)
      {
        res.send("error show---->" +err);
      }
      else {
        res.send(data);

      }
    })
  })
})



var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("server started at port 5000");
})

