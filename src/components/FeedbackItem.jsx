
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

import { FaEdit, FaTimes } from "react-icons/fa";

function FeedbackItem({item, handleDelete}) {

const {deleteFeedback, editFeedback} = useContext(FeedbackContext)



  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <FaTimes color='pink' className='close'
       onClick ={() => deleteFeedback(item.id)}
       />
       <FaEdit className='edit' color='pink' onClick={() => editFeedback(item)}/>
      <div className="text-display">{item.text}</div>
    
    </Card>
  )
}



export default FeedbackItem;