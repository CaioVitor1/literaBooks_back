import client from "../src/database/postgres";
import * as recommendationsFactory from "../prisma/factories/recommendationsFactory"
import * as genreFactory from "../prisma/factories/genreFactory"
async function main(){
    const genre = await client.genre.findFirst()
    if(genre === null){
       const newGenres = await genreFactory.createGenre()

        await client.genre.createMany({
            data: newGenres
        })
    } else{
        console.log("genres already register")
    }

    const recommendations = await client.recommendations.findFirst()
    
    if(recommendations === null) {
      const newRecommendations = await recommendationsFactory.createRecommendations()
      await client.recommendations.createMany({
            data: newRecommendations          
        })

    } else{
        console.log("Recommendations already register")
    }


}



main()
.then(async () => {
    await client.$disconnect()
  })
.catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)

  })