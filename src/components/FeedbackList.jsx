
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner'



function FeedbackList() {

  const {feedback, isLoading} = useContext(FeedbackContext);

 
  if(!isLoading && (!feedback || feedback.length ===0)){
    return <p>No Feedback Yet</p>
  }else{

    return(
        isLoading ? <Spinner/> : (
          <div className="feeback-list " >
      
          {feedback.map(item =>{
                        
          return  <FeedbackItem key ={item.id} item ={item}  />
                  
            
          })}
          
         </div>
        )
    )
   
  }


}



export default FeedbackList