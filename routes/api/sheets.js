const express = require("express");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const axios=require('axios');
const router = express.Router();

const TOKEN_PATH = "token.json";

var i=0;

credentials = fs.readFileSync("credentials.json", "UTF-8");
  var client_id = JSON.parse(credentials).installed.client_id;
  var client_secret = JSON.parse(credentials).installed.client_secret;
  var redirect_uris = JSON.parse(credentials).installed.redirect_uris;
  oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  var token = fs.readFileSync(TOKEN_PATH, "UTF-8");
  oAuth2Client.setCredentials(JSON.parse(token));
  auth = oAuth2Client;

// @route GET api/sheets/:sheetId
// @desc  Get All tasks from Google Spreadsheets with sheetId
// @acess Public
router.get("/:sheetId", function(req, result) {
  
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: req.params.sheetId,
      range: "Sheet1!A1:I",
    },
    function(err, res) {
      if (err) return console.log("The API returned an error: " + err);
      console.log(res);
      const rows = res.data.values;
      if (rows.length) {
        console.log(
          "taskid	taskname	taskdesc	assignedto	assigneddate	deadline	completiondate	status	comments	"
        );
        i=0;
        rows.map(row => {
          
          console.log(
            `${row[0]}, ${row[1]},${row[2]},${row[3]},${row[4]},${row[5]},${
              row[6]
            },${row[7]},${row[8]}`
          );
          i++;
          console.log('New ID',i);
          if (row[0] == 1) console.log(row[2]);
        });

        return result.status(200).json({ msg: rows });
      } else {
        console.log("No data found.");
      }
    }
  );
});



// @route POST api/sheets/:sheetId
// @desc  POST Tasks to Google Spreadsheets with sheetId
// @acess Public
router.post('/:sheetId',function(req,res){
  const sheets = google.sheets({ version: "v4", auth });
  console.log('\n\n\n\n\n\n\n\nNew ID here',i);
  console.log(req.body);
  sheets.spreadsheets.values.append({
    auth:auth,
    spreadsheetId:req.params.sheetId,
    range:`Sheet1!A${i+1}:I${i+1}`,
    valueInputOption: "USER_ENTERED",
    resource: {values:[[i].concat(req.body['taskArray'])]}
  },(err,result)=>{
    if (err) {
      
      console.log('The API returned an error: ' + err);
      return;
    }else{
      //console.log('Object',arr);
      console.log("Append Successfull");
      return res.status(200).json({msg:'Success'}) ;
    }

  });
});


// @route UPDATE api/sheets/:sheetId/:taskId
// @desc  UPDATE a specific Task from the Google Spreadsheets with sheetId and TaskId
// @acess Public
router.post('/:sheetId/:taskId',function(req,res){
  const sheets = google.sheets({ version: "v4", auth });
  axios.get(`https://msunscrumboard.herokuapp.com/api/sheets/${req.params.sheetId}`).then(function(response){
    
  const tasks=response.data.msg;
  j=0;
  tasks.map(task=>{
    j++;
    console.log('Task',task);
    if(task[0]==req.params.taskId){
      sheets.spreadsheets.values.update({
        auth:auth,
        spreadsheetId:req.params.sheetId,
        range:`Sheet1!B${j}:I${j}`,
        valueInputOption: "USER_ENTERED",
        resource: {values:[req.body]}
      },(err,result)=>{if (err) {
      
        console.log('The API returned an error: ' + err);
        return;
      }else{
        //console.log('Object',arr);
        console.log("Update Successfull");
        return res.status(200).json({msg:'Success'}) ;
      }});
      //break;
    }
  });
  console.log('Response',response.data.msg)}).catch(function(error){console.log('Error',error)});
});

module.exports = router;
