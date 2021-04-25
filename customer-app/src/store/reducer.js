const defaultState={
    
        status:1
    }
    
    export default (state=defaultState,action)=>{
        
        switch(action.type){
            case "change_status" :
            {
                const newState =JSON.parse(JSON.stringify(state))
                newState.status = action.value;
                return newState;
            }
            
            default:
            return state
        }
    
    }