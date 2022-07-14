
import{createContext, useEffect, useState} from 'react';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{

  const [feedback, setFeedback] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
  })



  // Delete  Feedback
  const deleteFeedback = async function (id){

    if(window.confirm('Are you sure you want to delete?')){
     await fetch(`/feedback/${id}`, {

        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        }
  
      });
    
     
  
      setFeedback(feedback.filter((item) =>item.id !== id))
    }

  }


  // Add feedback
  const addFeedback = async function(newFeedback){
         
    const response = await fetch('/feedback', {

      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),

    })

    const data = await response.json();

    setFeedback([data, ...feedback])


  }

  // Set item to be updated
  function editFeedback(item){
   setFeedbackEdit({
      item: item,
      edit: true
    })

    
  }

 const updateFeedback = async function(id, updItem){

          
  const response = await fetch(`/feedback/${id}`, {

    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updItem),

  })

  const data = await response.json();



  setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data} : item)))

  }

  const fetchFeedback = async function(){

    const response = await fetch('/feedback?_sort=id&_order=desc');

    const data = await response.json();

    setFeedback(data);

    setIsLoading(false)

  }

  useEffect(() =>{

    fetchFeedback();

  }, [])



  return(
    <FeedbackContext.Provider value={{
       feedback,
       feedbackEdit,
       isLoading,
       deleteFeedback,
       addFeedback,
       editFeedback,
       updateFeedback,
      
       
    }}>
          {children}
    </FeedbackContext.Provider>
  )

}



export default FeedbackContext