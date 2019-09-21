const express = require("express");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const router = express.Router();

const TOKEN_PATH = "token.json";

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
router.get("/:sheetId", (req, result) => {
  
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: req.params.sheetId,
      range: "Sheet1!A1:I",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      console.log(res);
      const rows = res.data.values;
      if (rows.length) {
        console.log(
          "taskid	taskname	taskdesc	assignedto	assigneddate	deadline	completiondate	status	comments	"
        );
        rows.map(row => {
          console.log(
            `${row[0]}, ${row[1]},${row[2]},${row[3]},${row[4]},${row[5]},${
              row[6]
            },${row[7]},${row[8]}`
          );
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
router.post('/:sheetId',(err,res)=>{

});

module.exports = router;
