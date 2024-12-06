import {React,useState} from 'react'
import './App.css';
import Notification from './Notification';

const App=()=>{
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleFormSubmit=()=>{
    console.log('Form submission');
    setNotificationOpen(true);
  }
  return(
    <div>
      <button onClick={handleFormSubmit}>Submit</button>
      <Notification
      open={notificationOpen}
      message="Form Submitted successfully"
      onClose={()=>setNotificationOpen(false)}
    />
    </div>
  )
}

export default App;
