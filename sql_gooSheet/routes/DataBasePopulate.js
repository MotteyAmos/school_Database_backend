const router = require("express").Router();
const classroom = require("../modules/classroom")
const jackson_index = require("../modules/jackson_index")
const jackson_store = require("../modules/jackson_store")
const schoolModule = require("../modules/school")
const data = require("../data")


router.post("/classroom", async (req,res)=>{

    try{

        const newClassRoom = await new classroom({
            classroomId: req.body.classroomId,
            school_symbol: req.body.school_symbol,
            school_name: req.body.school_name,
            city: req.body.city,
            district: req.body.district,
            topic_id: req.body.topic_id,
            topic: req.body.topic,
            grade_id: req.body.grade_id,
            grade: req.body.grade
        })

        const savedClassRoom = await newClassRoom.save()

        res.send(savedClassRoom)

    }catch(error){
        console.log(error)
        res.status(400).send(error)

    }
})


router.post("/jackson_index", async (req,res)=>{
    
    try{

        const newJackson_index = await new jackson_index({
            id: req.body.id,
            key: req.body.key,
            storeKey: req.body.storeKey,
        })

        const savedJackson_index = await newJackson_index.save()

        res.send(savedJackson_index)

    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }


})


router.post("/jackson_store", async (req,res)=>{
    try{

        const newJackson_store = await new jackson_store({
            key:req.body.key,
            value: req.body.value,           
            iv: req.body.iv,
            tag: req.body.tag,
        })

        const savedJackson_store = await newJackson_store.save()

        res.send(savedJackson_store)

    }catch(error){
        console.log(error)

        res.send(error)
    }
    

})


router.post("/school", async (req,res)=>{

    try{

        const newSchool = await new schoolModule({
            sCity:req.body.sCity,
            nCityId: req.body.nCityId,
            sGeodistrict: req.body.sGeodistrict,
            nGeodistrictId: req.body.nGeodistrictId ,
            sEdudistrict: req.body.sEdudistrict ,
            nEdudistrictId: req.body.nEdudistrictId ,
            sMigzar: req.body.sMigzar ,
            nMigzarId: req.body.nMigzarId,
            sSchoolName: req.body.sSchoolName ,
            sSchoolCode: req.body.sSchoolCode  ,
            sPikuah: req.body.sPikuah ,
            nPikuahId: req.body.nPikuahId,
            sOwnership: req.body.sOwnership,
            sSchoolPhone: req.body.sSchoolPhone ,
            sSchoolEmail: req.body.sSchoolEmail,
            sSchoolStreet: req.body.sSchoolStreet
        })

        const savedNewSchool = await newSchool.save()

        res.send(savedJackson_store)

    }catch(error){
        console.log(error)

        res.send(error)
    }
  
    
  /*  const schoolData = data.filter((singleData) =>{
        return singleData.name === "school"
    })
 
    try{

        const newSchool = await new schoolModule({
            sCity:item.sCity,
            nCityId: item.nCityId,
            sGeodistrict: item.sGeodistrict,
            nGeodistrictId: item.nGeodistrictId ,
            sEdudistrict: item.sEdudistrict ,
            nEdudistrictId: item.nEdudistrictId ,
            sMigzar: item.sMigzar ,
            nMigzarId: item.nMigzarId,
            sSchoolName: item.sSchoolName ,
            sSchoolCode: item.sSchoolCode  ,
            sPikuah: item.sPikuah ,
            nPikuahId: item.nPikuahId,
            sOwnership: item.sOwnership,
            sSchoolPhone: item.sSchoolPhone ,
            sSchoolEmail: item.sSchoolEmail,
            sSchoolStreet: item.sSchoolStreet
        })

        const savedNewSchool = await newSchool.save()

       // res.send(savedJackson_store)

    }catch(error){
        console.log(error)

        res.send(error)
    }
  
    schoolData.forEach(((dataObj )=>{
    console.log(dataObj["data"].length)
       
       //console.log(dataObj["data"])



       dataObj["data"].forEach( async (item) =>{
       

       })
       // res.send(singleData)
    }))*/

})



module.exports = router



