const {Schema,model} = require("mongoose")


const gamesSchema = new Schema({

    idLocal:{
        type:Number,
        required:true
        
    },
    idVisitor:{
        type:Number,
        required:true 

    },
    estadoPartido:{

        type:String,
        required:true
    } ,
    fecha:{
        
     type:String ,
     required:true
    },

    resultadoLocal:{

        type:Number,
        required:true
    },
    resultadoVisitante:{

        type:Number,
        require:true
    }

})




module.exports = model("games",gamesSchema)