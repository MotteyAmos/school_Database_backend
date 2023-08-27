const router = require("express").Router();
const {google} = require('googleapis');
const keys  = require("../keys.json");
const classroom = require('../modules/classroom'); 
const school = require("../modules/school")
const jackson_store = require("../modules/jackson_store")


router.get("/", async (req,res)=>{

  try{

     // Fetch data from MongoDB
  const classroomdata = await classroom.find();
  const jackson_storeData = await jackson_store.find();
  const schoolData = await school.find();

  // Add headers
  const classroomHeaders = Object.keys(classroomdata[0]._doc); 
  const jackson_storeHeaders = Object.keys(jackson_storeData[0]._doc)
  const schoolHeaders = Object.keys(schoolData[0]._doc)

//Add values
  let classroomValue = [] 
  let schoolValue = [] 
  let jackson_storeValue = [] 


  // Add class room data rows
  classroomdata.forEach(item => {
    const values = Object.values(item._doc);
    classroomValue.push(values)
  });

  // Add school room data rows
  schoolData.forEach(item => {
    const values = Object.values(item._doc);
    schoolValue.push(values)
  });

  
  // Add jackson_storeValue room data rows
  jackson_storeData.forEach(item => {
    const values = Object.values(item._doc);
    jackson_storeValue.push(values)
  });

  const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];
  
  // creating a client access
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    SCOPES
  )
  
  client.authorize( async function (err, tokens){
  
    if (err){
      console.log(err)
      res.send(err)
//return;
    }else{
      const googleSheets = google.sheets({version:"v4",auth:client})
    
      // classroom sheet render
      let classroomResult = await googleSheets.spreadsheets.values.append(
        {
          spreadsheetId: '1ta_YAA2p2UragESAW5ZXNxTtBST9V9zgPd91F0FIPME',
          range: "classroom",
          valueInputOption: "USER_ENTERED",
          resource :{
            values: [
              classroomHeaders,
              ...classroomValue
            ]
          }
        }
      )

      //school sheet render
      let schoolResult = await googleSheets.spreadsheets.values.append(
        {
          spreadsheetId: '1ta_YAA2p2UragESAW5ZXNxTtBST9V9zgPd91F0FIPME',
          range: "school",
          valueInputOption: "USER_ENTERED",
          resource :{
            values: [
              schoolHeaders,
              ...schoolValue
            ]
          }
        }
      )

      //jackson_store sheet render
      let jackson_storeResult = await googleSheets.spreadsheets.values.append(
        {
          spreadsheetId: '1ta_YAA2p2UragESAW5ZXNxTtBST9V9zgPd91F0FIPME',
          range: "jackson_store",
          valueInputOption: "USER_ENTERED",
          resource :{
            values: [
              jackson_storeHeaders,
              ...jackson_storeValue
            ]
          }
        }
      )
     
      res.send(jackson_storeResult)
    }
  })

  }
  catch(error){
    res.status(400).send(error)
  }

})















/*router.get("/", async (req, res) => {
  try {
    const SCOPES = [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ];

    const jwt = new JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: SCOPES,
    });
    const doc = new GoogleSpreadsheet("1ta_YAA2p2UragESAW5ZXNxTtBST9V9zgPd91F0FIPME", jwt);
    await doc.loadInfo(); // loads document properties and worksheets
  
    console.log(doc.title);
    res.send(doc.title)
    //await doc.updateProperties({ title: 'renamed doc' });

  } catch (error) {}
});

*/

module.exports = router;
