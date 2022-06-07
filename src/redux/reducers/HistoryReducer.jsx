const historyState ={};
export const HistoryReducer = (state = historyState, action) =>{
    switch(action.type){
        case 'ADD_HISTORY':{
            state = action.payload;
            return {...state}
        }
        default: return {...state}
    }
}