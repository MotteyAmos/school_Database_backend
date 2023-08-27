const mongoose = require('mongoose');
const classroom = require('../modules/classroom'); 
const school = require("../modules/school")
const jackson_store = require("../modules/jackson_store")
const excel = require('exceljs');
const router = require("express").Router()





router.get('/', async (req, res) => {
    try {
      // Fetch data from MongoDB
      const classroomdata = await classroom.find();
      const jackson_storeData = await jackson_store.find();
      const schoolData = await school.find();
  
      // Create Excel file
      const workbook = new excel.Workbook();
      const classroomWorkSheet = workbook.addWorksheet('classroom');
      const jackson_storeWookSheet = workbook.addWorksheet("jackson_store");
      const schoolWorkSheet = workbook.addWorksheet("schoolData")
  
      // Add headers
      const classroomHeaders = Object.keys(classroomdata[0]._doc); 
      const jackson_storeHeaders = Object.keys(jackson_storeData[0]._doc)
      const schoolHeaders = Object.keys(schoolData[0]._doc)

      classroomWorkSheet.addRow(classroomHeaders);
      jackson_storeWookSheet.addRow(jackson_storeHeaders);
      schoolWorkSheet.addRow(schoolHeaders)

  
      // Add class room data rows
      classroomdata.forEach(item => {
        const values = Object.values(item._doc);
        classroomWorkSheet.addRow(values);
      });

      //Add jackson_store data rows
      jackson_storeData.forEach(item =>{
        const values = Object.values(item._doc);
        jackson_storeWookSheet.addRow(values)
      })

     //Add school data rows
    schoolData.forEach(item =>{
        const values = Object.values(item._doc);
        schoolWorkSheet.addRow(values)
    })
  
      // Stream Excel file as response
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=export.xlsx');
      await workbook.xlsx.write(res);
  
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  





module.exports = router
