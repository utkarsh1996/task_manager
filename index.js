const fs = require("fs");
const cors=require('cors');
const path=require('path');
const express = require("express");
const readline = require("readline");
const { google } = require("googleapis");
const axios=require('axios');

const app = express();
app.use(cors());

app.use(express.json());
// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
/* app.get("/", (req, res) => {
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), getAll);
  });
}); */

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Enter the code from that page here: ", code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          "Error while trying to retrieve access token",
          err
        );
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getAll(auth) {
  const sheets = google.sheets({ version: "v4", auth });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1uqx6V4sODuvjSS6N2qV8W8l7E9yyEH9Kv-XP4dF_dBk",
      range: "Sheet1!A2:I"
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      rows = res.data.values;
      if (rows.length) {
        console.log(
          "taskid	taskname	taskdesc	assignedto	assigneddate	deadline	completiondate	status	comments	"
        );
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map(row => {
          console.log(
            `${row[0]}, ${row[1]},${row[2]},${row[3]},${row[4]},${row[5]},${
              row[6]
            },${row[7]},${row[8]}`
          );
        });
        content2 = rows;
        console.log("Content", content2);
      } else {
        console.log("No data found.");
      }
    }
  );
}

//Use Routes
app.use("/api/sheets", require("./routes/api/sheets"));
//console.log(__dirname);
//Serve static assets if in production
if(process.env.NODE_ENV==='production'){
  //Set a static folder
  app.use(express.static('dist/scrum-ui'));

  app.get('*',(req,res)=>{
      res.sendFile(path.resolve('dist','scrum-ui','index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
