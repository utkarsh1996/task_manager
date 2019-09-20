const express=require('express');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const router=express.Router();

const TOKEN_PATH = 'token.json';

/* function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  } */

  

// @route GET api/sheets
// @desc  Get All tasks
// @acess Public
router.get('/',(req,result)=>{
    //var credentials;
    function getNewToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', (code) => {
          rl.close();
          oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
              if (err) return console.error(err);
              console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
          });
        });
      }
    //var auth=null;
    /* fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        credentials=JSON.parse(content);
        console.log('Credentials',credentials);
    }); */
    credentials=fs.readFileSync('credentials.json','UTF-8');
    console.log('Credentials2',credentials);
    console.log('Credentials3',JSON.parse(credentials));
    var client_id=JSON.parse(credentials).installed.client_id;
    var client_secret=JSON.parse(credentials).installed.client_secret;
    var redirect_uris=JSON.parse(credentials).installed.redirect_uris;
    //console.log(a);
    //const {client_secret, client_id, redirect_uris} = JSON.parse(credentials);
    console.log('Credentials4',JSON.parse(credentials));
    oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
  /*   fs.readFile(TOKEN_PATH, (err, token) => {
        console.log('oauth',oAuth2Client);
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      //callback(oAuth2Client);
      auth=oAuth2Client;
      console.log('Auth',auth);
    }); */
    var token=fs.readFileSync(TOKEN_PATH,'UTF-8');
    oAuth2Client.setCredentials(JSON.parse(token));
    auth=oAuth2Client;
    const sheets = google.sheets({version: 'v4', auth});
  
  sheets.spreadsheets.values.get({
    spreadsheetId: '1uqx6V4sODuvjSS6N2qV8W8l7E9yyEH9Kv-XP4dF_dBk',
    range: 'Sheet1!A2:I',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('taskid	taskname	taskdesc	assignedto	assigneddate	deadline	completiondate	status	comments	');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]},${row[2]},${row[3]},${row[4]},${row[5]},${row[6]},${row[7]},${row[8]}`);
        
      });
      return result.status(200).json({msg:rows});
      content2=rows;
        console.log('Content',content2);
    } else {
      console.log('No data found.');
    }

  });
    
});

module.exports=router;