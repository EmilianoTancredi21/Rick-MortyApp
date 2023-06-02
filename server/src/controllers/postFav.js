const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender} = req.body;

        if(!id && !name && !origin && !status && !image && !species && !gender) return status(401).send("Faltan datos");

         await Favorite.findOrCreate({
           where: {
                id,
               name,
               origin,
               status, 
               image,
               species,
               gender
           }
        })

        const charFav = await Favorite.findAll()
        res.status(200).json(charFav)


    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


module.exports = {postFav};