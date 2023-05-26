const initialState = {
    myFavorites:[],
    allCharactersFav:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_FAV": return{
            ...state,
            myFavorites: action.payload ,
            allCharactersFav: action.payload
        }

        case "REMOVE_FAV": return{
            ...state,
            myFavorites: action.payload,
            allCharactersFav: action.payload
        }
        case "FILTER": 
        const charFilter = state.allCharactersFav.filter((char) => char.gender === action.payload)
        return{
            ...state,
            myFavorites: charFilter
        }

        case "ORDER": 
        const allCharactersCopy = [...state.allCharactersFav]
        return{
            ...state,
            myFavorites: 
            action.payload === "A" ? allCharactersCopy.sort((a,b) => a.id < b.id) : allCharactersCopy.sort((a,b) => b.id - a.id)
        }

        default: return {
            ...state
        }
    }
}

export default reducer;