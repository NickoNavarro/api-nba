
const fetch  =require("node-fetch")


const  getTeams= async()=>{
    

    const Teams = await fetch("https://www.balldontlie.io/api/v1/teams")
        .then(res => res.json())
        .then(resp=> {
            
            
            const data = resp.data

            
            //return the list of data
            return data
            
        })

        return Teams

}




const  postGames= async()=>{
    

    const Games = await fetch("https://www.balldontlie.io/api/v1/games")
        .then(res => res.json())
        .then(resp=> {
            
            // list define
            const list = []
            // loop to get through the response
            for(let i=0; i < resp.data.length; i++){

                //get the data we want
                const datos = {
                    idLocal: resp.data[i].home_team.id,
                    idVisitor:resp.data[i].visitor_team.id,
                    estadoPartido:resp.data[i].status,
                    fecha:resp.data[i].date,
                    resultadoLocal:resp.data[i].home_team_score,
                    resultadoVisitante:resp.data[i].visitor_team_score,

                }


                //insert into the  list
                list.push(datos)

            }
            return list
            
        })

        return Games

}

const  getlistGames= async()=>{
    

    const listGames = await fetch("https://www.balldontlie.io/api/v1/games")
        .then(res => res.json())
        .then(resp=> {
            
            const list = []

            for(let i=0; i < resp.data.length; i++){

                const datos = {
                    idLocal: resp.data[i].home_team.id,
                    nombreLocal: resp.data[i].home_team.full_name,
                    idVisitor:resp.data[i].visitor_team.id,
                    estadoPartido:resp.data[i].status,
                    fecha:resp.data[i].date,
                    resultadoLocal:resp.data[i].home_team_score,
                    resultadoVisitante:resp.data[i].visitor_team_score,

                }

                list.push(datos)

            }
            return list
            
        })

        return listGames

}



module.exports = {
    postGames,
    getTeams,
    getlistGames
}