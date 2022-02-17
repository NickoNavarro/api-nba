const Router  = require("express")
const fetch = require("node-fetch")
const { postGames, getTeams, getlistGames } = require("../helpers/getApi")
const router = Router() 

// Model instance
const Game = require("../models/games")


//endpoints
router.get("/teams",async(req,res,next)=>{

        // instances of our helpers/getApi
        const getlistTeams = await  getTeams()

       
        
    
    res.json({
        ok:"ok",
        msg:getlistTeams
    })

    })


router.post("/games",async(req,res,next)=>{


        const postGamesList =await postGames()

        //loop to get through the indexes 
        for(let i =0;i<postGamesList.length;i++){

            //create a new game every loop jump
            const newGame = new Game(postGamesList[i]) 

            //insert into our DB
            await newGame.save()
        }


    res.json({
        ok:"ok",
        msg:"Games inserted",
    })
})


router.get("/listGames",async(req,res,next)=>{

    const listGames = await getlistGames()

    

    res.json({
        ok:"ok",
        msg:listGames
    })
})


router.get("/listGames/:state",async(req,res,next)=>{


    const {state} = req.params

    //search the value in the DB
    const gameState = await Game.find({estadoPartido:state})

    

    res.json({
        ok:"ok",
        msg:gameState
        
    })
})



router.get("/DateGameMin/:date",async(req,res,next)=>{


    const {date} = req.params

    //search the value in the DB
    const gameDate = await Game.find({fecha:{$gt:date} })

    console.log(gameDate)

    res.json({
        ok:"ok",
        msg:gameDate
        
    })
})




router.get("/DateGameMax/:date",async(req,res,next)=>{


    const {date} = req.params

    //search the value in the DB
    const gameDate = await Game.find({fecha:{$lt:date} })

    console.log(gameDate)

    res.json({
        ok:"ok",
        msg:gameDate
        
    })
})



module.exports = router