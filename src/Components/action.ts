import { newMessage } from "./Slices/peopleSlice";
// import getCurrentTime from "./CurrentTime";
import { AppDispatch } from "./store";

function actionFunction(messageObj:any){
    return (dispatch:AppDispatch,getstate:any)=>{
        let msg = messageObj.message
        
        dispatch(newMessage(msg))
        // let time = moment().format("LT")
        
    }
}

export default actionFunction