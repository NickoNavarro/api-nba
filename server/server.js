const express = require("express")
const cors = require("cors")
const api = require("../routes/api")
const {database} = require("../database/db")

//server define
class Server {

    constructor(){

        //express instance
        this.app = express()
        this.port = process.env.PORT


        //database
        this.ConectDatabase()

        //middlewares
        this.middlewares()

        //routes
        this.routes()
 
    }

    async ConectDatabase(){
        await database()
    }


    middlewares(){
        this.app.use(cors())

    }

    routes(){

        this.app.use("/",api)
    }


    listen(){

        this.app.listen(this.port,()=>{

            console.log(`listening on port ${this.port}`)

        })
    }
}


module.exports = Server