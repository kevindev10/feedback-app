
import { useState, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect';
import { useEffect } from 'react';






function FeedbackForm() {
  const {addFeedback,  feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState();

  function handleTextChange (e){
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !=='' &&  text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage("Text must be greater than 10 characters")
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }


    setText(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault();

    if(text.trim().length > 10){
      
      let newFeedback = {
        rating: rating,
        text: text
      }

    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)

    }else{
      addFeedback(newFeedback)
    
    }
    
    setText('');

    }

 
  }

  useEffect(() =>{
   
    if(feedbackEdit.edit === true){
     setBtnDisabled(false)
     setText(feedbackEdit.item.text)
     setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])


  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate our service with us?</h2>
        <RatingSelect select = {(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
          <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    
      
    </Card>
  )
}

export default FeedbackForm