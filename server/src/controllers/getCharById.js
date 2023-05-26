const axios = require ("axios");
const URL = "https://rickandmortyapi.com/api/character"


    const getCharById = async (req, res) => {

try {
        const {id} = req.params;
        const response = await axios(`${URL}/${id}`)
        const {name, status, species, gender, origin, image} = response.data
        const characterData = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
            }
            return characterData.name ? res.status(200).json(characterData) : res.status(404).send("not found")
            
    } 

    catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getCharById,
}
