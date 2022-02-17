const mongoose = require("mongoose")

const database = async()=>{

    try{

       await mongoose.connect(process.env.DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
       })
       
       console.log(" DB conected ")


    }catch(err){

        console.log(err)
    }
}



module.exports = {
    database
}