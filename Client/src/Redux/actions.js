import axios from "axios";

export const filterCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: "ORDER",
        payload: orden
    }
}



export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character);
            const {data} = response
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}




export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint)
            const { data } = response;
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}